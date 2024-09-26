import SearchIcon from "../../../../icons/SearchIcon";
import styles from "./SearchInput.module.css";

const SearchInput = () => {
  return (
    <div className={styles.searchInputWrapper}>
      <input className={styles.searchInput} type="text" placeholder="Search" />
      <SearchIcon />
    </div>
  );
};

export default SearchInput;
