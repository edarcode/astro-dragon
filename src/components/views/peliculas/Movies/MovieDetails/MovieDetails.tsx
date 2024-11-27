import { useQuery } from "@tanstack/react-query";
import { useMovies } from "../useMovies.store";
import css from "./MovieDetails.module.css";
import { getMovieById } from "./getMovieById.service";
import Spinner from "src/react/components/Spinner/Spinner";
import Btn from "src/react/components/Btn/Btn";
import movieDetails from "./movieDetails.avif";
import "@justinribeiro/lite-youtube";
import type { LiteYTEmbed } from "@justinribeiro/lite-youtube";
import type { DOMAttributes } from "react";
import { TMDB } from "src/consts/tmdb";

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

  const trailers = movie.videos?.results;
  const trailerId = trailers[trailers.length - 1]?.key;

  return (
    <div className={css.details}>
      <div className={css.card} style={trailerId ? { maxWidth: "850px" } : {}}>
        {trailerId ? (
          <div className={css.banner}>
            <lite-youtube videoId={trailerId}>
              <a href={`https://www.youtube.com/watch?v=${trailerId}`}>
                Watch on YouTube: "Sample output of devtools-to-video cli tool"
              </a>
            </lite-youtube>
          </div>
        ) : (
          <picture className={css.banner}>
            <img
              src={TMDB.completeImgUrl(movie.backdrop_path)}
              alt={movie.title}
            />
          </picture>
        )}

        <div className={css.content}>
          <div className={css.genres}>
            {movie.genres.map((genre) => (
              <span key={genre.id}>{genre.name}</span>
            ))}
          </div>

          <span className={css.year}>
            {new Date(movie.release_date).getFullYear()}
          </span>

          <h1>
            <span>{movie.title}</span>
            <span>{movie.tagline ? movie.tagline : "---"}</span>
          </h1>
          <p className={css.overview}>{movie.overview}</p>
          <Btn onClick={closeDetails}>Seguir buscando pelis</Btn>
        </div>

        <span className={css.average}>{movie.vote_average.toFixed()} ⭐</span>
      </div>

      <img className={css.bgi} src={movieDetails.src} alt={"fondo"} />
    </div>
  );
}

type CustomElement<T> = Partial<T & DOMAttributes<T> & { children: any }>;
declare global {
  namespace JSX {
    interface IntrinsicElements {
      ["lite-youtube"]: CustomElement<LiteYTEmbed>;
    }
  }
}
