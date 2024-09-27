import styles from './MovieCard.module.css'

interface MovieCardProps {
  title: string
  year: string
  imdbID: string
  type: string
  posterSrc: string
}
const MovieCard = (props: MovieCardProps) => {
  const { title, year, imdbID, type, posterSrc } = props

  const isPoster = posterSrc && posterSrc !== 'N/A'

  return (
    <div className={styles.movieCardWrapper}>
      {isPoster ? (
        <div className={styles.moviePosterWrapper}>
          <img
            src={posterSrc}
            alt="movie-poster"
            className={styles.moviePoster}
          />
        </div>
      ) : (
        <div className={styles.placeholderWrapper}>
          <img src="./poster-placeholder.png" alt="poster-placeholder" />
        </div>
      )}

      <div className={styles.movieInfoWrapper}>
        <span>Name: {title}</span>
        <span>Year: {year}</span>
        <span>imdbID: {imdbID}</span>
        <span>Type: {type}</span>
      </div>
    </div>
  )
}

export default MovieCard
