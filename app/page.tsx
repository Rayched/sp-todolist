import Todoinputbar from "@/_components/home/Todoinputbar";
import styles from "../_styles/home/homepage.module.css";

export default function HomePage() {
  return (
    <div className={styles.homepage_wrapper}>
      <Todoinputbar />
    </div>
  );
}
