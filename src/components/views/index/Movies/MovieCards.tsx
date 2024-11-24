import { useQuery } from "@tanstack/react-query";
import { getPopularMoviesService } from "./getPopularMoviesService";
import MovieCard from "./MovieCard";
import css from "./MovieCards.module.css";

export default function MovieCards() {
  const { data, isLoading } = useQuery({
    queryKey: ["popularMovies"],
    queryFn: getPopularMoviesService,
  });

  if (!data) return null;
  if (isLoading) return <div>Cargando...</div>;

  return (
    <div className={css.cards}>
      {data.results.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
