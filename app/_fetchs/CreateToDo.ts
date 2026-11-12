//할 일 등록 api fetch

interface I_ToDo {
    id: number;
    tenantId: string;
    name: string;
    isComplited: boolean;
    memo: string | null;
    imageUrl: string | null;
};

interface I_CreateToDoRequest {
    name: string;
};

const TenantId = process.env.NEXT_PUBLIC_TENANT_ID;

//사용자가 입력한 할 일을 등록하는 fetch function
export async function CreateToDo(name: string): Promise<I_ToDo> {
    if (!TenantId) {
        throw new Error("Tenant Id가 설정되지 않았습니다.");
    }

    const resp = await fetch(
        `https://assignment-todolist-api.vercel.app/api/${TenantId}/items`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, }),
        }
    );

    const Data = await resp.json();

    //HTTP 요청 실패 여부 체크
    if (!Data) {
        console.error("API 요청 실패:", {
            status: resp.status,
            response: Data
        });

        throw new Error("To Do 등록에 실패했습니다.");
    }

    return Data;
}