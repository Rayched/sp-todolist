/**
 * ShowToDos, ShowDones Components에서
 * 중복되는 코드들을 모아둔 showitems_commons file
 * styled-components 및 props type 등 한곳에 모아둠
 */

import { I_ToDo } from "@/app/_fetchs/CreateToDo";
import styled from "styled-components";

export interface I_Showitems {
    tododatas: I_ToDo[];
    isDesktop: string;
};

export const ShowItems_Container = styled.div<{ isdesktop: string }>`
    width: ${(props) => props.isdesktop === "true" ? "45dvw" : "90dvw"};
    min-height: 30dvh;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    .container_titles {
        width: 100%;
        height: 10%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
    };

    .container_bodys {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    };
`;

export function ToDoCheckbox() {
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="15" fill="#FEFCE8" strokeWidth="2" stroke="#0F172A" />
        </svg>
    );
}

export function DoneCheckbox() {
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="16" fill="#7C3AED" />
            <path d="M8 16.2857L13.8182 22L24 12" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" stroke="#FEFCE8" />
        </svg>
    );
}