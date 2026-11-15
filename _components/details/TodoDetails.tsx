"use client"

import { I_ToDo } from "@/app/_fetchs/CreateToDo";
import { useState } from "react";
import styled from "styled-components"
import { DoneCheckbox, ToDoCheckbox } from "../home/todolist/showitems/showitems_commons";
import { DetailCommons } from "./detail_commons";
import { AddImages, EditImages } from "./AddImages";
import AddMemobox from "./AddMemobox";

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

const ToDoItem = styled.div`
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

    .checkbox_area {
        width: 30%;
        max-width: 65px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .todoname_area {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        text-decoration: underline;
    }
`;

const ResponsiveArea = styled.div`
    width: 90%;
    min-height: 40dvh;
    margin-top: 1%;
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
    const [Selected, setSelected] = useState(false);
    //아이템 체크 여부 관리

    /**이미지 및 메모 값 관리 */
    const [ImgUrl, setImgUrl] = useState("");
    const [MemoValue, setMemoValue] = useState("");

    //체크박스 클릭 event
    const CheckboxClicked = () => {
        setSelected(!Selected);
    }

    return (
        <Wrapper>
            <ToDoItem style={{ backgroundColor: Selected ? "#EDE9FE" : "white" }}>
                <div className="checkbox_area" onClick={CheckboxClicked}>
                    {
                        !Selected ? (
                            <ToDoCheckbox />
                        ) : (
                            <DoneCheckbox />
                        )
                    }
                </div>
                <div className="todoname_area">{detaildata.name}</div>
            </ToDoItem>
            <ResponsiveArea>
                <div className="ImageAndMemoArea">
                    {
                        ImgUrl === "" ? (
                            <AddImages
                                is_selected={Selected}
                            />
                        ) : (
                            <EditImages
                                imgurl={ImgUrl}
                                is_selected={Selected}
                            />
                        )
                    }
                    <AddMemobox />
                </div>
                <div className="buttonsbox">
                    <EditButton is_select={Selected ? "true" : "false"} disabled={Selected ? false : true}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 7L6.5 11.5L14 4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke="#0F172A" />
                        </svg>
                        <span>수정 완료</span>
                    </EditButton>
                    <DeleteButton disabled={Selected ? false : true}>
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