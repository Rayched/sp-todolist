"use client"

import { SetStateAction } from "react";
import styled from "styled-components"

interface I_AddMemobox {
    memotext: string;
    setMemotext: React.Dispatch<SetStateAction<string>>;
}

const Container = styled.div`
    width: 90dvw;
    height: 30dvh;
    margin: 3% 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    border-style: solid;
    border-width: 1px;
    border-color: #FEFCE8;
    border-radius: 10px;
    background-image: url(/imgs/tododetails/memo.svg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    overflow-x: hidden;
    overflow-y: auto;

    .memobox_title {
        margin-top: 5px;
        font-weight: 600;
        color: #92400E;
    }

    /**desktop version, 크기 설정 */
    @media screen and (min-width: 1100px){
        width: 45dvw;
        height: 32dvh;
        margin-left: 1%;
    };

    /**태블릿 및 모바일 version 크기 설정 */
    @media screen and (max-width: 1099px){
        width: 85dvw;
        height: 32dvh;
    };

    /**Scroll bar 설정*/
    /**firefox */
    textarea {
        scrollbar-width: thin;
        scrollbar-color: #ffe28a transparent;
    };

    /**chrome, Edge, Safari */
    textarea::-webkit-scrollbar {
        width: 6px;
    };
    textarea::-webkit-scrollbar-track {
        background: transparent;
    };
    textarea::-webkit-scrollbar-thumb {
        background-color: #ffe28a;
        border-radius: 10px;
    };

    textarea::-webkit-scrollbar-thumb:hover {
        background-color: #ffd45c;
    };
`;

const MemoTextArea = styled.textarea`
    width: 93%;
    height: 70%;
    padding: 0;
    position: absolute;
    top: 15%;
    border: none;
    outline: none;
    resize: none;
    text-align: center;
    background-color: transparent;
    font-size: 16px;
    line-height: 16px;
    color: #0f172a;
`;

export default function AddMemobox({ memotext, setMemotext }: I_AddMemobox) {
    const MemoChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const {
            currentTarget: { value }
        } = e;

        setMemotext(value);
    };

    return (
        <Container>
            <div className="memobox_title">
                Memo
            </div>
            <MemoTextArea
                autoComplete="off"
                value={memotext}
                onChange={MemoChange}
            />
        </Container>
    );
}