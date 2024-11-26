import { useEffect } from "react";
import { useGetMovies } from "../useGetMovies";
import { useMovies } from "../useMovies.store";
import Spinner from "src/react/components/Spinner/Spinner";
import MovieFilters from "../MovieFilters/MovieFilters";
import MovieCard from "../MovieCard/MovieCard";
import css from "./MovieCards.module.css";

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
