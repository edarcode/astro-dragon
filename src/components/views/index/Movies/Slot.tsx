import { useQuery } from "@tanstack/react-query";
import { getPopularMoviesService } from "./getPopularMoviesService";
import MovieCard from "./MovieCard";
import css from "./Slot.module.css";

export default function Slot() {
  const { data, isLoading } = useQuery({
    queryKey: ["popularMovies"],
    queryFn: getPopularMoviesService,
  });

  if (!data) return null;
  if (isLoading) return <div>Cargando...</div>;

  return (
    <div className={css.slot}>
      {data.results.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
