import { useQuery } from "@tanstack/react-query";
import { getPopularMovies } from "./getPopularMovies.service";
import MovieCard from "./MovieCard";
import css from "./MovieCards.module.css";
import Spinner from "../../../react/Spinner/Spinner";

export default function MovieCards() {
  const { data, isLoading } = useQuery({
    queryKey: ["popularMovies"],
    queryFn: getPopularMovies,
  });

  if (isLoading) return <Spinner />;
  if (!data) return null;

  return (
    <div className={css.cards}>
      {data.results.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
