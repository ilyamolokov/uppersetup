import styles from "./MovieCard.module.css";

interface MovieCardProps {
  name: string;
  year: string;
  imdbID: string;
  type: string;
  imageSrc: string;
}
const MovieCard = (props: MovieCardProps) => {
  const { name, year, imdbID, type, imageSrc } = props;

  return (
    <div className={styles.movieCardWrapper}>
      <div className={styles.posterWrapper}>
        {imageSrc ? (
          <img src={imageSrc} alt="movie-poster" />
        ) : (
          <img src="./poster-placeholder.png" alt="poster-placeholder" />
        )}
      </div>

      <div className={styles.movieInfoWrapper}>
        <span>Name: {name}</span>
        <span>Year: {year}</span>
        <span>imdbID: {imdbID}</span>
        <span>Type: {type}</span>
      </div>
    </div>
  );
};

export default MovieCard;
