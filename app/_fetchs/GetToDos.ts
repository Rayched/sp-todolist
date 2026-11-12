import { I_ToDo } from "./CreateToDo";

export async function GetToDos() {
    const TenantId = process.env.NEXT_PUBLIC_TENANT_ID;

    if (!TenantId) {
        throw new Error("TenantId Error");
    }

    const Resp = await fetch(
        `https://assignment-todolist-api.vercel.app/api/${TenantId}/items?page=1&pageSize=10`,
        { method: "GET" }
    );

    if (!Resp.ok) {
        console.error("Api 요청 실패:", {
            status: Resp.status,
            response: Resp
        })
        throw new Error("할 일 목록 조회에 실패했습니다.");
    }

    const Data = await Resp.json() as I_ToDo[];
    return Data;
}