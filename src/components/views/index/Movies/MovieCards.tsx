import { useQuery } from "@tanstack/react-query";
import { getPopularMovies } from "./getPopularMovies.service";
import MovieCard from "./MovieCard";
import css from "./MovieCards.module.css";

export default function MovieCards({ setIsDetails }: Props) {
  const { data, isLoading } = useQuery({
    queryKey: ["popularMovies"],
    queryFn: getPopularMovies,
  });

  if (!data) return null;
  if (isLoading) return <div>Cargando...</div>;

  return (
    <div className={css.cards}>
      {data.results.map((movie) => (
        <MovieCard key={movie.id} movie={movie} setIsDetails={setIsDetails} />
      ))}
    </div>
  );
}

type Props = {
  setIsDetails: any;
};
