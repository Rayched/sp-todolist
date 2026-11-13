
export default async function ToDoDetailPage({ params }: { params: { itemId: string } }) {
    const { itemId } = await params;

    return (
        <div>{itemId}</div>
    );
}