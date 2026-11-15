"use client"

import { I_ToDo } from "@/app/_fetchs/CreateToDo";
import { useEffect, useState } from "react";
import styled from "styled-components"
import { DoneCheckbox, ToDoCheckbox } from "../home/todolist/showitems/showitems_commons";
import { DetailCommons } from "./detail_commons";
import { AddImages, EditImages } from "./AddImages";
import AddMemobox from "./AddMemobox";
import { ToDosDataStore } from "@/_stores/todosdata_store";
import { useStore } from "zustand";
import { DeleteToDo } from "@/app/_fetchs/UpdateToDo";
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
            width: auto;
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

    /**
     * 기존 todoitem의 값들 (name, isCompleted)
     * 개별 state에 업데이트
     */

    /**
     * detaildata => api로 가져온 할 일 상세 데이터
     * imageurl, memo data가 null이 아닌 경우
     * 기존에 추가된 이미지와 메모가 있다면
     * 이를 화면에 출력해야 한다.
     * 
     * 그리고 detail page에서 이미지와 메모를 출력하는 역할을 하는
     * <EditImages />, <AddMemobox />, 이하 두 컴포넌트는
     * 개별적으로 전달된 state 값을 참고해서 image와 memo를 출력한다.
     * 
     * 두 컴포넌트에 전달되는 각기 다른 두개의 state의 초기 값은
     * 전부 ""이기에 Rendering 되기 전 미리 useEffect hook 활용해서
     * state 값을 업데이트를 해둔다.
     */
    useEffect(() => {
        //imageurl, memodata null인 경우 대비
        if (!detaildata.imageUrl && !detaildata.memo) {
            setCompleted(detaildata.isCompleted);
            setToDoName(detaildata.name);
            return;
        } else if (!detaildata.imageUrl && detaildata.memo !== null) {
            setMemoValue(detaildata.memo);
        } else if (detaildata.imageUrl !== null && !detaildata.memo) {
            setImgUrl(detaildata.imageUrl);
        } else if (detaildata.imageUrl !== null && detaildata.memo !== null) {
            setMemoValue(detaildata.memo);
            setImgUrl(detaildata.imageUrl);
        };
        setCompleted(detaildata.isCompleted);
        setToDoName(detaildata.name);
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
                    {
                        ImgUrl === "" ? (
                            <AddImages />
                        ) : (
                            <EditImages
                                imgurl={ImgUrl}
                            />
                        )
                    }
                    <AddMemobox
                        memotext={MemoValue}
                        setMemotext={setMemoValue}
                    />
                </div>
                <div className="buttonsbox">
                    <EditButton is_select={Completed ? "true" : "false"}>
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