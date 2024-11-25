import Spinner from "../../../react/Spinner/Spinner";
import MovieCard from "./MovieCard";
import { useGetPopularMovies } from "./useGetPopularMovies";
import css from "./MovieCards.module.css";

export default function MovieCards() {
  const { popularMovies, isLoading } = useGetPopularMovies();

  if (isLoading) return <Spinner />;
  if (!popularMovies) return null;

  return (
    <div className={css.cards}>
      {popularMovies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
