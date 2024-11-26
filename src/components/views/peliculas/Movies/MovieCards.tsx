import Spinner from "../../../../react/components/Spinner/Spinner";
import MovieCard from "./MovieCard";

import css from "./MovieCards.module.css";
import { useEffect } from "react";
import { useMovies } from "./useMovies.store";
import MovieFilters from "./MovieFilters";
import { useGetMovies } from "./useGetMovies";

export default function MovieCards() {
  const { movies, isLoading } = useGetMovies();
  const scrollPos = useMovies((movies) => movies.scrollPos);

  useEffect(() => {
    window.scrollTo(0, scrollPos);
  }, []);

  if (isLoading) return <Spinner />;
  if (!movies) return null;

  return (
    <div className={css.movieCards}>
      <MovieFilters className="filters" />
      <div className={css.cards}>
        {movies.map((movie) => (
          <MovieCard key={crypto.randomUUID() + movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
