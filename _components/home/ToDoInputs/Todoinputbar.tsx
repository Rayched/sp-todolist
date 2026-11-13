"use client"

import { ViewportStore } from "@/_stores/viewport_store";
import { CreateToDo } from "@/app/_fetchs/CreateToDo";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components"
import { useStore } from "zustand";
import { LargeInputButton, SmallInputButtons } from "./Inputbuttons";
import { ToDosDataStore } from "@/_stores/todosdata_store";

interface I_FormValue {
    todoname: string;
};

const InputForm = styled.form`
    width: 100dvw;
    height: 5vh;
    max-width: 1300px;
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const ToDoInput = styled.input`
    width: 65%;
    height: 100%;
    max-height: 50px;
    padding-left: 15px;
    display: block;
    border: 2px solid black;
    background-color: #F1F5F9;
    border-radius: 25px;
    box-shadow: 1px 2px rgba(0, 0, 0, 1);
    font-size: 16px;

    &:focus {
        outline: none;
    }
`;

export default function Todoinputbar() {
    const { NowViewportWidth } = useStore(ViewportStore);
    const { addNewToDo } = useStore(ToDosDataStore);

    const { register, reset, handleSubmit, formState: { errors, isSubmitted } } = useForm<I_FormValue>({
        defaultValues: {
            todoname: ""
        }
    });

    const router = useRouter();

    const onValid = async ({ todoname }: I_FormValue) => {
        const trimmedToDo = todoname.trim();

        if (!trimmedToDo) return;

        try {
            const newToDo = await CreateToDo(trimmedToDo);
            console.log(newToDo);
            reset();
            addNewToDo({
                todo_id: newToDo.id,
                todo_name: newToDo.name,
                isDone: false
            });
        } catch (error) {
            console.log(error);
            reset();
        }
    };

    /**
     * 할 일 입력창에 할 일을 입력하지 않고
     * '추가하기' 버튼 혹은 Enter 키를 누른 경우
     * alert을 통해 할 일을 입력하지 않았다는 경고를 보낸다.
     * 
     * 단, 어디까지나 Submit이 발생된 뒤에 나와야 하므로
     * 해당 사이드 이펙트는 formstate, isSubmitted의 값에 변화가 생길 때만
     * 실행되도록 설정하였다.
     */
    useEffect(() => {
        if (errors.todoname) {
            alert(errors.todoname.message);
            reset();
        }
    }, [isSubmitted]);

    return (
        <InputForm onSubmit={handleSubmit(onValid)}>
            <ToDoInput
                type="text"
                placeholder="할 일을 입력해주세요."
                autoComplete="off"
                {...register("todoname", {
                    required: {
                        value: true,
                        message: "할 일을 입력하지 않았습니다."
                    },
                })}
            />
            {
                !NowViewportWidth || NowViewportWidth > 500 ? (
                    <LargeInputButton />
                ) : null
            }
            {
                NowViewportWidth && NowViewportWidth <= 500 ? (
                    <SmallInputButtons />
                ) : null
            }
        </InputForm>
    );
}