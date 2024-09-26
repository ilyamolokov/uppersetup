import ArrowLeftIcon from "../../icons/ArrowLeftIcon";
import ArrowRightIcon from "../../icons/ArrowRightIcon";

import styles from "./Pagination.module.css";

const MOCK_DATA = [1, 2, 3, 4, 5];

const Pagination = () => {
  return (
    <div className={styles.paginationWrapper}>
      <button className={styles.prevButton}>
        <ArrowLeftIcon className={styles.arrowIcon}/>
      </button>

      {MOCK_DATA.map((page, i) => (
        <button key={page} className={styles.pageButton}>
          {page}
        </button>
      ))}

      <button className={styles.nextButton}>
        <ArrowRightIcon className={styles.arrowIcon}/>
      </button>
    </div>
  );
};

export default Pagination;
