import React from "react";
import Header from "../Header/Header";

import SearchResultsInfo from "../SearchResultsInfo/SearchResultsInfo";
import MovieList from "../MovieList/MovieList";
import Pagination from "../Pagination/Pagination";

import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.appContainer}>
      <div className={styles.headerContainer}>
        <Header />
      </div>

      <div className={styles.searchResultsInfoContainer}>
        <SearchResultsInfo />
      </div>

      <div className={styles.movieListContainer}>
        <MovieList />
      </div>

      <div className={styles.paginationContainer}>
        <Pagination />
      </div>
    </div>
  );
};

export default App;
