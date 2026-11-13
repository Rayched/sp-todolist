/**
 * 할 일 수정 fetch 함수
 */

import { I_ToDo } from "./CreateToDo";

interface I_UpdateToDo {
    todo_id: number;
    todo_name: string;
    isCompleted: boolean;
    memo: string | null;
};


export async function UpdateToDo({ todo_id, todo_name, isCompleted, memo }: I_UpdateToDo) {
    const TenantId = process.env.NEXT_PUBLIC_TENANT_ID;

    if (!TenantId) {
        throw new Error("TenantId가 설정되지 않았습니다.");
    }

    const resp = await fetch(
        `https://assignment-todolist-api.vercel.app/api/${TenantId}/items/${todo_id}`,
        {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: todo_name,
                isCompleted: isCompleted,
                memo: memo
            })
        }
    );

    const Data = await resp.json();

    if (!Data) {
        console.log("Error Check:", {
            status: resp.status,
            response: Data
        })

        throw new Error("To Do 수정 실패");
    }

    return Data;
}