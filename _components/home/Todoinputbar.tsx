"use client"

import { ViewportStore } from "@/_stores/viewport_store";
import { CreateToDo } from "@/app/_fetchs/CreateToDo";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components"
import { useStore } from "zustand";

interface I_FormValue {
    todoname: string;
};

const InputForm = styled.form`
    width: 95vw;
    height: 5vh;
    max-width: 1300px;
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const ToDoInput = styled.input`
    width: 70%;
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

const InputButton = styled.button`
    width: 25%;
    height: 100%;
    max-width: 160px;
    max-height: 55px;
    margin-left: 1%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: #EDE9FE;
    background-color: #7C3AED;
    border: 2px solid black;
    border-radius: 25px;
    font-size: 18px;
    box-shadow: 1px 2px rgba(0, 0, 0, 1);

    span {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    img {
        width: 21px;
        height: 21px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 5%;
    }
`;

const defaultURL = "https://assignment-todolist-api.vercel.app/api/rayched";

export default function Todoinputbar() {
    const { NowViewportWidth } = useStore(ViewportStore);
    const { register, reset, handleSubmit, formState: { errors, isSubmitted } } = useForm<I_FormValue>({
        defaultValues: {
            todoname: ""
        }
    });

    const onValid = async ({ todoname }: I_FormValue) => {
        const trimmedToDo = todoname.trim();

        if (!trimmedToDo) return;

        try {
            const newToDo = await CreateToDo(trimmedToDo);
            console.log(newToDo);
            reset();
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
            <InputButton>
                {
                    !NowViewportWidth || NowViewportWidth > 500 ? (
                        <span>
                            <img src={'/imgs/Property 1=plus.svg'} />
                            <label>추가하기</label>
                        </span>
                    ) : null
                }
                {
                    NowViewportWidth && NowViewportWidth <= 500 ? (
                        <span>
                            <img src={`imgs/Property 1=plus.svg`} />
                        </span>
                    ) : null
                }
            </InputButton>
        </InputForm>
    );
}