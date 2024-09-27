import { useMovies } from '../../context/MovieContext'
import Error from '../Error/Error'
import Spinner from '../Spinner/Spinner'
import MovieCard from './components/MovieCard/MovieCard'

import styles from './MovieList.module.css'

const MovieList = () => {
  const { movies, debouncedSearchValue, isLoading, isError, apiErrorMessage } =
    useMovies()

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <Error />
  }

  if (apiErrorMessage) {
    return <span>{apiErrorMessage}</span>
  }

  if (!movies.length && !debouncedSearchValue) {
    return <span>Enter a movie title to search...</span>
  }

  return (
    <div className={styles.movieListWrapper}>
      {movies.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          title={movie.Title}
          year={movie.Year}
          imdbID={movie.imdbID}
          type={movie.Type}
          posterSrc={movie.Poster}
        />
      ))}
    </div>
  )
}

export default MovieList
