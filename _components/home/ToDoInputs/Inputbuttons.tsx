"use client";

import { ToDosDataStore } from "@/_stores/todosdata_store";
import { ColorInfos } from "@/_styles/colorinfos";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useStore } from "zustand";

type BtnColortype = {
    textColor: string;
    bgColor: string;
};

const BtnColors: BtnColortype[] = [
    //todo empty colors
    { textColor: ColorInfos[8].colorvalue, bgColor: ColorInfos[7].colorvalue },

    //todo non empty colors
    { textColor: ColorInfos[0].colorvalue, bgColor: ColorInfos[4].colorvalue }
]

const InputButtonContainer = styled.button<{ isempty: string }>`
    width: 23%;
    height: 100%;
    max-width: 160px;
    max-height: 55px;
    margin-left: 1%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: 2px solid black;
    border-radius: 25px;
    font-size: 18px;
    color: ${(props) => props.isempty === "true" ? "#EDE9FE" : "#0f172a"};
    background-color: ${(props) => props.isempty === "true" ? "#7C3AED" : "#CBD5E1"};
    box-shadow: 1px 2px rgba(0, 0, 0, 1);

    .iconbox {
        width: 30%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    span {
        width: 70%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export function SmallInputButtons() {
    const { ToDosData } = useStore(ToDosDataStore);
    const [isEmpty, setIsEmpty] = useState("true");

    useEffect(() => {
        if (ToDosData.length > 0) {
            setIsEmpty("false");
        } else {
            setIsEmpty("true")
        }
    }, [ToDosData]);

    return (
        <InputButtonContainer isempty={isEmpty}>
            {
                ToDosData.length <= 0 ? (
                    <svg width={"20"} height={"20"} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 8L14 8" strokeWidth="2" strokeLinecap="round" stroke="white" />
                        <path d="M8 14L8 2" strokeWidth="2" strokeLinecap="round" stroke="white" />
                    </svg>
                ) : null
            }
            {
                ToDosData.length > 0 ? (
                    <svg width={"20"} height={"20"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 12L21 12" strokeWidth="3" strokeLinecap="round" stroke="#64748B" />
                        <path d="M12 21L12 3" strokeWidth="3" strokeLinecap="round" stroke="#64748B" />
                    </svg>
                ) : null
            }
        </InputButtonContainer>
    );
}

export function LargeInputButton() {
    const { ToDosData } = useStore(ToDosDataStore);
    const [isEmpty, setIsEmpty] = useState("true");

    useEffect(() => {
        if (ToDosData.length > 0) {
            setIsEmpty("false");
        } else {
            setIsEmpty("true")
        }
    }, [ToDosData]);

    return (
        <InputButtonContainer isempty={isEmpty}>
            <div className="iconbox">
                {
                    ToDosData.length <= 0 ? (
                        <svg width={"20"} height={"20"} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 8L14 8" strokeWidth="2" strokeLinecap="round" stroke="white" />
                            <path d="M8 14L8 2" strokeWidth="2" strokeLinecap="round" stroke="white" />
                        </svg>
                    ) : null
                }
                {
                    ToDosData.length > 0 ? (
                        <svg width={"20"} height={"20"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 12L21 12" strokeWidth="3" strokeLinecap="round" stroke="#64748B" />
                            <path d="M12 21L12 3" strokeWidth="3" strokeLinecap="round" stroke="#64748B" />
                        </svg>
                    ) : null
                }
            </div>
            <span>추가하기</span>
        </InputButtonContainer>
    );
}