import styles from "./SearchResultsInfo.module.css";

const SearchResultsInfo = () => {
  return (
    <div className={styles.searchResultsInfoWrapper}>
      <h2 className={styles.searchInfoText}>
        You searched for: <u>Batman</u>{" "}
      </h2>

      <div className={styles.resultsCount}>338 results</div>
    </div>
  );
};

export default SearchResultsInfo;
