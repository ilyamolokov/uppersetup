import { useEffect, useState } from "react";
import { useDebounce } from "@uidotdev/usehooks";
import { useMovies } from "../../../../context/MovieContext";
import { searchMovies } from "../../../../api/searchMovies";
import SearchIcon from "../../icons/SearchIcon";

import styles from "./SearchInput.module.css";

const SearchInput = () => {
  const { isLoading, setSearchValue, setCurrentPage } = useMovies();
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setCurrentPage(1);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const searchTerm = formData.get("search") || "";
    setSearchValue(searchTerm as string);
    form.reset();
    form.focus();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`${styles.searchInputFormWrapper} ${
        isFocused && styles.focused
      }`}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      <input
        onChange={handleChange}
        name="search"
        type="text"
        placeholder="Search"
        className={styles.searchInput}
      />
      <button
        className={styles.searchButton}
        disabled={isLoading}
        type="submit"
      >
        {isLoading ? "..." : <SearchIcon />}
      </button>
    </form>
  );
};

export default SearchInput;
