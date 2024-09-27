import { useMovies } from "../../../../context/MovieContext";
import ArrowRightIcon from "../../icons/ArrowRightIcon";
import styles from "./NextButton.module.css";

const NextButton = () => {
  const { currentPage, totalMovies, setCurrentPage } = useMovies();
  const totalPages = Math.ceil(totalMovies / 10);

  const handleClick = () => {
    setCurrentPage(currentPage === totalPages ? totalPages : currentPage + 1);
  };

  return (
    <button className={styles.nextButton} onClick={handleClick}>
      <ArrowRightIcon className={styles.arrowRightIcon} />
    </button>
  );
};

export default NextButton;
