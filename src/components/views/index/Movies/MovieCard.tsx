import { TMDB } from "../../../../consts/tmdb";
import type { PopularMoviesResult } from "./types";
import css from "./MovieCard.module.css";

export default function MovieCard({ movie }: Props) {
  const poster = TMDB.completePath(movie.poster_path);

  return (
    <picture key={movie.id} className={css.movie}>
      <img src={poster} alt={movie.title} />
    </picture>
  );
}

type Props = {
  movie: PopularMoviesResult;
};
