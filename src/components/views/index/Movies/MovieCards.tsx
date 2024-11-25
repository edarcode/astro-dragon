import MovieCard from "./MovieCard";
import css from "./MovieCards.module.css";
import Spinner from "../../../react/Spinner/Spinner";
import { useGetPopularMovies } from "./useGetPopularMovies";

export default function MovieCards() {
  const { isLoading, popularMovies } = useGetPopularMovies();

  if (isLoading) return <Spinner />;
  if (!popularMovies) return null;

  return (
    <div className={css.cards}>
      {popularMovies.results.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
