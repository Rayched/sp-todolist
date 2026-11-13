"use client"

import styled from "styled-components"

interface I_EditButton {
    btnText: string;
    textColor: string;
    bgColor: string;
    children: React.ReactNode;
};

const Button = styled.button`
    width: 50%;
    height: 100%;
    max-width: 120px;
    max-height: 60px;
    margin-left: 1%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: 2px solid black;
    border-radius: 25px;
    font-size: 16px;
    box-shadow: 1px 2px rgba(0, 0, 0, 1);

    .iconbox {
        width: 20%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    span {
        width: 80%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

function ButtonFormat({ btnText, textColor, bgColor, children }: I_EditButton) {
    return (
        <Button style={{ color: textColor, backgroundColor: bgColor }}>
            <div className="iconbox">{children}</div>
            <span>{btnText}</span>
        </Button>
    );
};

export function EditButton() {
    return (
        <ButtonFormat btnText="수정 완료" textColor="black" bgColor="#BEF264">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 7L6.5 11.5L14 4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke="#0F172A" />
            </svg>
        </ButtonFormat>
    );
}

export function DeleteButton() {
    return (
        <ButtonFormat btnText="삭제하기" textColor="white" bgColor="#F43F5E">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4L12 12" strokeWidth="2" strokeLinecap="round" stroke="white" />
                <path d="M12 4L4 12" strokeWidth="2" strokeLinecap="round" stroke="white" />
            </svg>
        </ButtonFormat>
    );
}