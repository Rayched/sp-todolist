/**
 * 할 일 수정 및 삭제 fetch 함수
 */

import { I_ToDo } from "./CreateToDo";

interface I_ChangeCompletedValue {
    todo_id: number;
    isCompleted: boolean;
};

interface I_DeleteToDo {
    todo_id: number;
}

export interface I_UpdateToDoProps {
    todo_id: number;
    todo_name: string;
    is_completed: boolean;
    image_url: string | null;
    memo_value: string | null;
}

const TenantId = process.env.NEXT_PUBLIC_TENANT_ID;

//Home, 할 일 완료 여부 update fetch function
export async function ChangeCompletedValue({ todo_id, isCompleted }: I_ChangeCompletedValue) {
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
                isCompleted: isCompleted
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

//할 일 수정 fetch 함수
export async function UpdateToDo({ todo_id, todo_name, is_completed, image_url, memo_value }: I_UpdateToDoProps) {
    if (!TenantId) {
        throw new Error("TenantId가 설정되지 않았습니다.");
    };

    const Resp = await fetch(
        `https://assignment-todolist-api.vercel.app/api/${TenantId}/items/${todo_id}`,
        {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: todo_name,
                memo: memo_value,
                imageUrl: image_url,
                isCompleted: is_completed,
            })
        }
    );

    const Data = await Resp.json();

    if (!Data) {
        console.error("API Error", {
            status: Resp.status,
            response: Data
        })
        throw new Error("할 일 수정에 실패했습니다.");
    }

    return Data;
}

//할 일 삭제 fetch 함수
export async function DeleteToDo({ todo_id }: I_DeleteToDo) {
    if (!TenantId) {
        throw new Error("TenantId가 설정되지 않았습니다.");
    }

    const resp = await fetch(
        `https://assignment-todolist-api.vercel.app/api/${TenantId}/items/${todo_id}`,
        {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );

    const Data = await resp.json();

    if (!Data) {
        console.error("API Error:", {
            status: resp.status,
            response: Data
        })
        throw new Error("To Do 삭제 실패");
    };

    return Data;
}