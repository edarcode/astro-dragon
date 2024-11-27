import { TMDB } from "src/consts/tmdb";
import type { MovieDetails } from "./types";

export const getMovieById = async (
  params: Params
): Promise<MovieDetails | undefined> => {
  const { signal, movieId } = params;

  if (!movieId) return;

  const url = TMDB.getUrlMovieById(movieId);

  const res = await fetch(url, {
    method: "GET",
    signal,
  });

  return await res.json();
};

type Params = {
  signal: AbortSignal;
  movieId: number | null;
};
