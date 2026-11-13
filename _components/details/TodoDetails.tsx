"use client"

import { I_ToDo } from "@/app/_fetchs/CreateToDo";
import { useState } from "react";
import styled from "styled-components"
import { DoneCheckbox, ToDoCheckbox } from "../home/todolist/showitems/showitems_commons";
import { useStore } from "zustand";
import { ViewportStore } from "@/_stores/viewport_store";
import { DeleteButton, EditButton } from "./detail_commons";

interface I_ToDoDetails {
    detaildata: I_ToDo
};

interface I_ShowingData {
    item_id: number;
    item_name: string;
    isChecked: boolean;
    memo: string;
    image_url: string;
};

const Wrapper = styled.div`
    width: 100dvw;
    max-width: 1300px;
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
    display: flex;
    flex-direction: column;
    align-items: center;

    /**수정 및 삭제 버튼 container's */
    /**desktop 버전 */
    .buttonsbox {
        width: 90%;
        height: 4dvh;
        display: flex;
        flex-direction: row;
        align-items: center;
    };

    #type_desktop {
        justify-content: flex-end;
    }
    #type_mobile {
        justify-content: center;
    }
`;

export default function ToDoDetails({ detaildata }: I_ToDoDetails) {
    const [ShowingData, setShowingData] = useState<I_ShowingData>({
        item_id: detaildata.id,
        item_name: detaildata.name,
        isChecked: false,
        memo: detaildata.memo ? detaildata.memo : "",
        image_url: detaildata.imageUrl ? detaildata.imageUrl : ""
    });

    const { NowViewportWidth } = useStore(ViewportStore);

    const CheckboxClicked = () => {
        if (ShowingData.isChecked) {
            setShowingData({
                item_id: ShowingData.item_id,
                item_name: ShowingData.item_name,
                isChecked: false,
                memo: ShowingData.memo,
                image_url: ShowingData.image_url
            })
        } else {
            setShowingData({
                item_id: ShowingData.item_id,
                item_name: ShowingData.item_name,
                isChecked: true,
                memo: ShowingData.memo,
                image_url: ShowingData.image_url
            })
        }
    }

    return (
        <Wrapper>
            <ToDoItem style={{ backgroundColor: ShowingData.isChecked ? "#EDE9FE" : "white" }}>
                <div className="checkbox_area" onClick={CheckboxClicked}>
                    {
                        !ShowingData.isChecked ? (
                            <ToDoCheckbox />
                        ) : (
                            <DoneCheckbox />
                        )
                    }
                </div>
                <div className="todoname_area">{ShowingData.item_name}</div>
            </ToDoItem>
            <ResponsiveArea>
                {
                    NowViewportWidth > 1000 ? (
                        <div id="type_desktop" className="buttonsbox">
                            <EditButton />
                            <DeleteButton />
                        </div>
                    ) : (
                        <div id="type_mobile" className="buttonsbox">
                            <EditButton />
                            <DeleteButton />
                        </div>
                    )
                }
            </ResponsiveArea>
        </Wrapper>
    );
}