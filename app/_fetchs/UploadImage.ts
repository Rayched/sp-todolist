//이미지 업로드 fetch function

interface I_Resp {
    url: string;
};

export async function UploadImage(imgfile: File): Promise<string> {
    const TenantId = process.env.NEXT_PUBLIC_TENANT_ID;

    if (!TenantId) {
        throw new Error("TenantId가 설정되지 않았습니다.")
    }

    const formData = new FormData();

    formData.append("image", imgfile);

    const PostImages = await fetch(
        `https://assignment-todolist-api.vercel.app/api/${TenantId}/images/upload`,
        {
            method: "POST",
            body: formData
        }
    );

    const Resp: I_Resp = await PostImages.json();

    if (!PostImages.ok) {
        throw new Error("이미지 업로드에 실패했습니다.");
    }

    return Resp.url;
}