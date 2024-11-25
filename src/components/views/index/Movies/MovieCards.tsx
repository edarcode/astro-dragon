import Spinner from "../../../../react/components/Spinner/Spinner";
import MovieCard from "./MovieCard";
import { useGetPopularMovies } from "./useGetPopularMovies";
import css from "./MovieCards.module.css";
import { useEffect } from "react";
import { useMovies } from "./useMovies.store";
import MovieFilters from "./MovieFilters";

export default function MovieCards() {
  const { popularMovies, isLoading } = useGetPopularMovies();
  const scrollPos = useMovies((movies) => movies.scrollPos);

  useEffect(() => {
    window.scrollTo(0, scrollPos);
  }, []);

  if (isLoading) return <Spinner />;
  if (!popularMovies) return null;

  return (
    <div className={css.movieCards}>
      <MovieFilters className="filters" />
      <div className={css.cards}>
        {popularMovies.map((movie) => (
          <MovieCard key={crypto.randomUUID() + movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
