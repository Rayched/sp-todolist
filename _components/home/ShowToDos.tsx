"use client"

import { I_ToDo } from "@/app/_fetchs/CreateToDo"

interface I_ShowToDos {
    params: I_ToDo[];
};

export default function ShowToDos({ params }: I_ShowToDos) {
    return (
        <ul>
            {
                params.map((data) => {
                    return (
                        <li key={data.id}>{data.name}</li>
                    );
                })
            }
        </ul>
    );
}