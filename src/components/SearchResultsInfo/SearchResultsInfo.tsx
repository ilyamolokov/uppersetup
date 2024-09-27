import { useMovies } from '../../context/MovieContext'

import styles from './SearchResultsInfo.module.css'

const SearchResultsInfo = () => {
  const { debouncedSearchValue, totalMovies, isFetching } = useMovies()

  if (!debouncedSearchValue || isFetching) {
    return null
  }

  return (
    <div className={styles.searchResultsInfoWrapper}>
      <h2 className={styles.searchInfoText}>
        You searched for: <u>{debouncedSearchValue}</u>{' '}
      </h2>

      <div className={styles.totalMovies}>
        {totalMovies === 1 ? `${totalMovies} result` : `${totalMovies} results`}
      </div>
    </div>
  )
}

export default SearchResultsInfo
