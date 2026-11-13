"use client"

import { useRouter } from "next/navigation";
import styled from "styled-components";

interface I_ToDoItem {
    todo_id: number;
    todo_name: string;
    is_completed: boolean;
    tenant_id: string;
    children: React.ReactNode;
};

const Container = styled.div`
    width: 95%;
    height: 4dvh;
    padding: 5px 0px;
    margin: 1% 0px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 2px solid black;
    border-radius: 25px;

    .checkbox_area {
        width: 15%;
        max-width: 65px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .todoname_area {
        width: 80%;
        height: 100%;
        display: flex;
        align-items: center;
    }

    &:hover {
        font-weight: bold;
        background-color: rgb(250, 250, 250);
    }
`;

export default function ToDoItem({ todo_id, todo_name, is_completed, tenant_id, children }: I_ToDoItem) {
    const router = useRouter();

    const redirect_detailpage = () => {
        router.push(`/items/${todo_id}`);
    };

    return (
        <Container>
            <div className="checkbox_area">
                {children}
            </div>
            <div className="todoname_area" onClick={redirect_detailpage}>
                {todo_name}
            </div>
        </Container>
    );
}