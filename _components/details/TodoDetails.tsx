"use client"

import { I_ToDo } from "@/app/_fetchs/CreateToDo";
import { useEffect, useState } from "react";
import styled from "styled-components"
import { DoneCheckbox, ToDoCheckbox } from "../home/todolist/showitems/showitems_commons";
import { DetailCommons } from "./detail_commons";
import { AddImages } from "./AddImages";
import AddMemobox from "./AddMemobox";
import { ToDosDataStore } from "@/_stores/todosdata_store";
import { useStore } from "zustand";
import { DeleteToDo, I_UpdateToDoProps, UpdateToDo } from "@/app/_fetchs/UpdateToDo";
import { useRouter } from "next/navigation";

interface I_ToDoDetails {
    detaildata: I_ToDo
};

interface I_EditButton {
    is_select: string;
}

const Wrapper = styled.div`
    width: 95dvw;
    max-width: 1150px;
    min-height: 80dvh;
    margin-top: 1%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ToDoItem = styled.div<{ completed: string }>`
    width: 90%;
    height: 4dvh;
    padding: 5px 0px;
    margin: 1% 0px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: 2px solid black;
    border-radius: 15px;
    background-color: ${(props) => props.completed === "true" ? "#EDE9FE" : "white"};

    .checkbox_area {
        width: 30%;
        max-width: 40px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .todoname_area {
        width: 15%;
        height: 100%;
        margin-left: 3px;
        display: flex;
        align-items: center;
        justify-content: flex-start;

        input {
            width: 65%;
            height: 80%;
            display: block;
            border: none;
            outline: none;
            font-size: 16px;
            font-weight: bold;
            text-decoration: underline;
            background-color: ${(props) => props.completed === "true" ? "#EDE9FE" : "white"};
        }
    }
`;

const ResponsiveArea = styled.div`
    width: 90%;
    min-height: 45dvh;
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .ImageAndMemoArea {
        width: 90%;
        height: auto;
        display: flex;
        align-items: center;

        @media screen and (min-width: 1100px){
            flex-direction: row;
            justify-content: center;
        };

        @media screen and (max-width: 1099px){
            flex-direction: column;
        };
    }

    /**수정 및 삭제 버튼 container's */
    /**desktop 버전 */
    .buttonsbox {
        width: 90%;
        height: 4dvh;
        display: flex;
        flex-direction: row;
        align-items: center;

        @media screen and (min-width: 1100px){
            justify-content: flex-end;
        };

        @media screen and (max-width: 1099px){
            justify-content: center;
        };
    };
`;

//수정 완료 버튼
const EditButton = styled(DetailCommons.edit_buttons) <I_EditButton>`
    color: black;
    background-color: ${(props) => props.is_select === "true" ? "#BEF264" : "#E2E8F0"};
`;

//삭제하기 버튼
const DeleteButton = styled(DetailCommons.edit_buttons)`
    color: white;
    background-color: #F43F5E;
`;

export default function ToDoDetails({ detaildata }: I_ToDoDetails) {
    //편집 data state's
    const [ToDoName, setToDoName] = useState("");
    const [Completed, setCompleted] = useState(false);
    const [ImgUrl, setImgUrl] = useState<string>("");
    const [MemoValue, setMemoValue] = useState<string>("");

    const { deleteToDoData } = useStore(ToDosDataStore);

    const router = useRouter();

    //체크박스 클릭 event
    const CheckboxClicked = () => {
        setCompleted(!Completed);
    };

    //Todoname input change event
    const ToDoNameChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {
            currentTarget: { value }
        } = e;
        setToDoName(value)
    };

    //EditBtn Click Event Listener
    const EditBtnClicked = async () => {
        const ModifyData: I_UpdateToDoProps = {
            todo_id: detaildata.id,
            todo_name: ToDoName,
            is_completed: Completed,
            image_url: ImgUrl,
            memo_value: MemoValue
        };

        try {
            const updateTest = await UpdateToDo(ModifyData);
            console.log(updateTest);
        } catch (error) {
            console.log(error);
        }
        await UpdateToDo(ModifyData);
        router.push("/");
    };

    //DeleteBtn Click Event Listener
    const DelBtnClicked = async () => {
        const Confirms = window.confirm(`'할 일 명: ${detaildata.name}'\n해당 할일을 삭제 하시겠습니까?`);

        if (!Confirms) {
            return;
        } else {
            await DeleteToDo({ todo_id: detaildata.id });
            deleteToDoData({ targetId: detaildata.id });
            router.push("/");
        }
    };

    useEffect(() => {
        //할 일 이름 및 완료 여부 update
        setToDoName(detaildata.name);
        setCompleted(detaildata.isCompleted);

        //이미지 url, memo update
        /**
         * api 통해 가져온 할 일의 상세 데이터 중
         * imageUrl과 memo의 type은 string|null이다.
         * 
         * 하위 컴포넌트인 <EditImages />, <AddMemobox />
         * 이하 두 컴포넌트가 참조하는 state 두 개 모두 type=string이기에
         * 이에 맞게, imageurl|memo가 null이면 ""을 state에 전달한다.
         */
        const convert_imgurl = detaildata.imageUrl ? detaildata.imageUrl : "";
        const convert_memovalue = detaildata.memo ? detaildata.memo : "";

        setImgUrl(convert_imgurl);
        setMemoValue(convert_memovalue);
    }, []);

    return (
        <Wrapper>
            <ToDoItem completed={Completed ? "true" : "false"}>
                <div className="checkbox_area" onClick={CheckboxClicked}>
                    {
                        !Completed ? (
                            <ToDoCheckbox />
                        ) : (
                            <DoneCheckbox />
                        )
                    }
                </div>
                <div className="todoname_area">
                    <input
                        type="text"
                        value={ToDoName}
                        onChange={ToDoNameChangeEvent}
                    />
                </div>
            </ToDoItem>
            <ResponsiveArea>
                <div className="ImageAndMemoArea">
                    <AddImages
                        imgurl={ImgUrl}
                        setImgUrl={setImgUrl}
                    />
                    <AddMemobox
                        memotext={MemoValue}
                        setMemotext={setMemoValue}
                    />
                </div>
                <div className="buttonsbox">
                    <EditButton is_select={Completed ? "true" : "false"} onClick={EditBtnClicked}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 7L6.5 11.5L14 4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke="#0F172A" />
                        </svg>
                        <span>수정 완료</span>
                    </EditButton>
                    <DeleteButton onClick={DelBtnClicked}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 4L12 12" strokeWidth="2" strokeLinecap="round" stroke="white" />
                            <path d="M12 4L4 12" strokeWidth="2" strokeLinecap="round" stroke="white" />
                        </svg>
                        <span>삭제하기</span>
                    </DeleteButton>
                </div>
            </ResponsiveArea>
        </Wrapper>
    );
}