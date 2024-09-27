import PrevButton from "./components/PrevButton/PrevButton";
import NextButton from "./components/NextButton/NextButton";
import PageButton from "./components/PageButton/PageButton";
import { useMovies } from "../../context/MovieContext";
import { generatePages } from "./utils/generatePages";

import styles from "./Pagination.module.css";

const Pagination = () => {
  const { movies, currentPage, totalMovies, setCurrentPage, isLoading } =
    useMovies();

  const totalPages = Math.ceil(totalMovies / 10);
  const pages = generatePages(currentPage, totalPages);

  const handlePageClick = (page: number | "nextPage" | "prevPage") => {
    if (page === "nextPage") {
      const p = pages[pages.indexOf("nextPage") - 1] as number;
      setCurrentPage(p + 1);
      return;
    }

    if (page === "prevPage") {
      const p = pages[pages.indexOf("prevPage") + 1] as number;
      setCurrentPage(p - 1);
      return;
    }
    setCurrentPage(page);
  };

  if (!movies.length || isLoading || totalPages === 1) {
    return null;
  }

  return (
    <div className={styles.paginationWrapper}>
      <PrevButton />

      {pages.map((page) => (
        <PageButton
          key={page}
          label={typeof page === "number" ? page : "..."}
          onClick={() => handlePageClick(page)}
        />
      ))}

      <NextButton />
    </div>
  );
};

export default Pagination;
