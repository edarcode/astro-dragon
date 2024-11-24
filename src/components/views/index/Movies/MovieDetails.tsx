import { useMovies } from "./useMovies.store";

export default function MovieDetails() {
  const closeDetails = useMovies((movies) => movies.closeDetails);
  const movieId = useMovies((movies) => movies.movieId);

  return (
    <div>
      <div>Película:{movieId}</div>
      <button onClick={closeDetails}>volver</button>
    </div>
  );
}
