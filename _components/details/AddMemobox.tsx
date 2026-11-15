"use client"

import styled from "styled-components"

const Container = styled.div`
    width: 90dvw;
    height: 30dvh;
    margin: 3% 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    border-radius: 10px;
    background-image: url(/imgs/tododetails/memo.svg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

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
`;

const MemoTextArea = styled.textarea`
    width: 80%;
    height: 55%;
    padding: 0;
    position: absolute;
    top: 35%;
    left: 10%;
    border: none;
    outline: none;
    resize: none;
    background-color: transparent;
    font-size: 16px;
    line-height: 64px;
    text-align: center;
    color: #0f172a;
`;

export default function AddMemobox() {
    return (
        <Container>
            <div className="memobox_title">
                Memo
            </div>
            <MemoTextArea
                autoComplete="off"
            />
        </Container>
    );
}