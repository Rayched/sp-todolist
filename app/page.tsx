import Todoinputbar from "@/_components/home/ToDoInputs/Todoinputbar";
import styles from "../_styles/home/homepage.module.css";
import { GetToDos } from "./_fetchs/GetToDos";
import ShowToDos from "@/_components/home/todolist/ToDoList";

export default async function HomePage() {
  const ToDoDatas = await GetToDos();

  if (ToDoDatas) {
    console.log(ToDoDatas);
  }

  return (
    <div className={styles.homepage_wrapper}>
      <Todoinputbar />
      {
        ToDoDatas ? <ShowToDos params={ToDoDatas} /> : null
      }
    </div>
  );
}
