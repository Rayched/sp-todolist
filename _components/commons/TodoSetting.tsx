"use client"

import { ToDosDataStore } from "@/_stores/todosdata_store";
import { I_ToDo } from "@/app/_fetchs/CreateToDo";
import { useEffect } from "react";
import { useStore } from "zustand";

interface I_ToDoSetting {
    tododata: I_ToDo[];
};
/**
 * 할 일 목록 조회 데이터를 전역 상태로 저장하는
 * 용도의 ToDoSetting components
 */
export default function ToDoSetting({ tododata }: I_ToDoSetting) {
    const { deClareToDo } = useStore(ToDosDataStore);

    useEffect(() => {
        if (tododata.length === 0) return;

        deClareToDo(tododata);
    }, []);

    return null;
}