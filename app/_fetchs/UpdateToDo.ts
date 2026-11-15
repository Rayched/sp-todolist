/**
 * 할 일 수정 및 삭제 fetch 함수
 */

interface I_ChangeCompletedValue {
    todo_id: number;
    isCompleted: boolean;
};

interface I_DeleteToDo {
    todo_id: number;
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
export async function UpdateToDo() {

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