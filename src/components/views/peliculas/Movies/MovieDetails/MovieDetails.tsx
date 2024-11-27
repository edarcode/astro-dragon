import { useQuery } from "@tanstack/react-query";
import { useMovies } from "../useMovies.store";
import css from "./MovieDetails.module.css";
import { getMovieById } from "./getMovieById.service";
import Spinner from "src/react/components/Spinner/Spinner";
import { TMDB } from "src/consts/tmdb";
import Btn from "src/react/components/Btn/Btn";
import movieDetails from "./movieDetails.avif";

export default function MovieDetails() {
  const closeDetails = useMovies((movies) => movies.closeDetails);
  const movieId = useMovies((movies) => movies.movieId);

  const { data: movie, isLoading } = useQuery({
    queryKey: ["movie", movieId],
    queryFn: ({ signal }) => getMovieById({ movieId, signal }),
    enabled: !!movieId,
  });

  if (isLoading) return <Spinner />;
  if (!movie) return null;

  console.log(movie);
  return (
    <div className={css.details}>
      <div className={css.card}>
        <picture className={css.banner}>
          <img
            src={TMDB.completeImgUrl(movie.backdrop_path)}
            alt={movie.title}
            width={492}
            height={277}
          />
        </picture>
        <div className={css.content}>
          <h1>
            <span>{movie.title}</span>
            <span>{movie.tagline ? movie.tagline : "---"}</span>
          </h1>

          <p className={css.overview}>{movie.overview}</p>
          <Btn onClick={closeDetails}>Seguir buscando</Btn>
          <Btn className={css.trailer}>Trailer</Btn>
        </div>

        <span className={css.average}>{movie.vote_average.toFixed()} ⭐</span>
      </div>

      <img className={css.bgi} src={movieDetails.src} alt={"fondo"} />
    </div>
  );
}
