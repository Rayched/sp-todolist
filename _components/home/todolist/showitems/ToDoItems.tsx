"use client"

import { ToDosDataStore } from "@/_stores/todosdata_store";
import { UpdateToDo } from "@/app/_fetchs/UpdateToDo";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import { useStore } from "zustand";

interface I_ToDoItem {
    todo_id: number;
    todo_name: string;
    is_completed: boolean;
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
    }
`;

export function ToDoItem({ todo_id, todo_name, is_completed }: I_ToDoItem) {
    const router = useRouter();
    const { updateToDoData } = useStore(ToDosDataStore);

    const redirect_detailpage = () => {
        router.push(`/items/${todo_id}`);
    };

    const CheckboxClicked = async () => {
        try {
            updateToDoData({ targetId: todo_id, isDone: true });
            const Test = await UpdateToDo({
                todo_id: todo_id,
                todo_name: todo_name,
                isCompleted: true,
                memo: ""
            });
            console.log(Test);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Container>
            <div className="checkbox_area" onClick={CheckboxClicked}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="16" cy="16" r="15" fill="#FEFCE8" strokeWidth="2" stroke="#0F172A" />
                </svg>
            </div>
            <div className="todoname_area" onClick={redirect_detailpage}>
                {todo_name}
            </div>
        </Container>
    );
}

export function DoneItem({ todo_id, todo_name, is_completed }: I_ToDoItem) {
    const router = useRouter();
    const { updateToDoData } = useStore(ToDosDataStore);

    const redirect_detailpage = () => {
        router.push(`/items/${todo_id}`);
    };

    const CheckboxClicked = async () => {
        try {
            updateToDoData({ targetId: todo_id, isDone: false });
            const Test = await UpdateToDo({
                todo_id: todo_id,
                todo_name: todo_name,
                isCompleted: false,
                memo: ""
            });
            console.log(Test);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Container style={{ backgroundColor: "#EDE9FE" }}>
            <div className="checkbox_area" onClick={CheckboxClicked}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="16" cy="16" r="16" fill="#7C3AED" />
                    <path d="M8 16.2857L13.8182 22L24 12" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" stroke="#FEFCE8" />
                </svg>
            </div>
            <div className="todoname_area" onClick={redirect_detailpage}>
                {todo_name}
            </div>
        </Container>
    );
}