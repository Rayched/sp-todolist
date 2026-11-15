"use client";

import { NonText_InputButtonIcon, Text_InputButtonIcon } from "@/_components/commons/IconComponents";
import { ToDosDataStore } from "@/_stores/todosdata_store";
import styled from "styled-components";
import { useStore } from "zustand";

interface I_InputButtons {
    isEmptys: string;
};

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
    border: 2px solid #0f172a;
    border-radius: 25px;
    font-size: 18px;
    color: ${(props) => props.isempty !== "" ? "#EDE9FE" : "black"};
    background-color: ${(props) => props.isempty !== "" ? "#7C3AED" : "#E2E8F0"};
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

//모바일 화면용 할일 입력 form submit 버튼
export function SmallInputButtons({ isEmptys }: I_InputButtons) {
    return (
        <InputButtonContainer isempty={isEmptys}>
            {
                isEmptys.length <= 0 ? (
                    <NonText_InputButtonIcon />
                ) : null
            }
            {
                isEmptys.length > 0 ? (
                    <Text_InputButtonIcon />
                ) : null
            }
        </InputButtonContainer>
    );
}

//데스크탑, 태블릿 용 할 일 입력 form submit 버튼
export function LargeInputButton({ isEmptys }: I_InputButtons) {
    return (
        <InputButtonContainer isempty={isEmptys}>
            <div className="iconbox">
                {
                    isEmptys.length <= 0 ? (
                        <NonText_InputButtonIcon />
                    ) : null
                }
                {
                    isEmptys.length > 0 ? (
                        <Text_InputButtonIcon />
                    ) : null
                }
            </div>
            <span>추가하기</span>
        </InputButtonContainer>
    );
}