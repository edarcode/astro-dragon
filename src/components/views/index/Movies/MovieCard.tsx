import { TMDB } from "../../../../consts/tmdb";
import type { PopularMoviesResult } from "./types";
import css from "./MovieCard.module.css";
import { Link } from "react-router-dom";
import { MOVIE_DETAIL } from "./router";

export default function MovieCard({ movie }: Props) {
  const poster = TMDB.completePath(movie.poster_path);

  return (
    <Link to={MOVIE_DETAIL.to}>
      <picture key={movie.id} className={css.movie}>
        <img src={poster} alt={movie.title} />
      </picture>
    </Link>
  );
}

type Props = {
  movie: PopularMoviesResult;
};
