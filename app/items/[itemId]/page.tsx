import { GetToDoDetails } from "@/app/_fetchs/GetToDoDetails";
import styles from "../../../_styles/home/homepage.module.css";
import ToDoDetails from "@/_components/details/TodoDetails";

export default async function ToDoDetailPage({ params }: { params: { itemId: string } }) {
    const { itemId } = await params;

    if (itemId === "" || Number.isNaN(itemId)) {
        return (
            <div>itemId를 확인해주세요.</div>
        );
    }

    const DetailData = await GetToDoDetails({ itemId: Number(itemId) });

    return (
        <div className={styles.homepage_wrapper}>
            {
                DetailData ? (
                    <ToDoDetails
                        detaildata={DetailData}
                    />
                ) : null
            }
        </div>
    );
}