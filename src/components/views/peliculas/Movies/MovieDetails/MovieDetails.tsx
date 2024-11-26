import { useQuery } from "@tanstack/react-query";
import { useMovies } from "../useMovies.store";
import css from "./MovieDetails.module.css";
import { getMovieById } from "./getMovieById.service";
import Spinner from "src/react/components/Spinner/Spinner";

export default function MovieDetails() {
  const closeDetails = useMovies((movies) => movies.closeDetails);
  const movieId = useMovies((movies) => movies.movieId);

  const { data: movie, isLoading } = useQuery({
    queryKey: ["movie", movieId],
    queryFn: ({ signal }) => getMovieById({ movieId, signal }),
    enabled: !!movieId,
  });

  if (isLoading) return <Spinner />;
  if (!movie) return null;

  return (
    <div className={css.details}>
      <div>Película:{movieId}</div>
      <button onClick={closeDetails}>volver</button>
    </div>
  );
}
