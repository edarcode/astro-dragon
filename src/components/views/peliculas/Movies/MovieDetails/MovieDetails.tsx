import { useMovies } from "../useMovies.store";
import css from "./MovieDetails.module.css";

export default function MovieDetails() {
  const closeDetails = useMovies((movies) => movies.closeDetails);
  const movieId = useMovies((movies) => movies.movieId);

  return (
    <div className={css.details}>
      <div>Película:{movieId}</div>
      <button onClick={closeDetails}>volver</button>
    </div>
  );
}
