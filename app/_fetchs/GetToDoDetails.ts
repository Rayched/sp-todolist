import { I_ToDo } from "./CreateToDo";

export async function GetToDoDetails({ itemId }: { itemId: number }) {
    const TenantId = process.env.NEXT_PUBLIC_TENANT_ID;

    if (!TenantId) {
        throw new Error("Tenant Id가 설정되지 않았습니다.");
    }

    const Resp = await fetch(`https://assignment-todolist-api.vercel.app/api/${TenantId}/items/${itemId}`);

    const Data = await Resp.json();

    if (!Resp.ok) {
        console.error("API Error", {
            status: Resp.status,
            response: Data
        })
        throw new Error("할 일 상세 조회에 실패했습니다.");
    }

    return Data as I_ToDo;
}