import { useMovies } from "../../../../context/MovieContext";
import ArrowLeftIcon from "../../icons/ArrowLeftIcon";
import styles from "./PrevButton.module.css";

const PrevButton = () => {
  const { currentPage, setCurrentPage } = useMovies();

  const handleClick = () => {
    setCurrentPage(currentPage === 1 ? 1 : currentPage - 1);
  };

  return (
    <button className={styles.prevButton} onClick={handleClick}>
      <ArrowLeftIcon className={styles.arrowLeftIcon} />
    </button>
  );
};

export default PrevButton;
