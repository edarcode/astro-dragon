import { TMDB } from "../../../../../consts/tmdb";
import type { PopularMoviesResult } from "../types";
import css from "./MovieCard.module.css";
import { useMovies } from "../useMovies.store";

export default function MovieCard({ movie }: Props) {
  const poster = TMDB.completePath(movie.poster_path);
  const openDetails = useMovies((movies) => movies.openDetails);

  return (
    <picture
      key={movie.id}
      className={css.movie}
      onClick={() => openDetails(movie.id)}
    >
      <img src={poster} alt={movie.title} />
    </picture>
  );
}

type Props = {
  movie: PopularMoviesResult;
};
