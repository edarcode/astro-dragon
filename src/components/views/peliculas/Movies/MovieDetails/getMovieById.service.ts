import { TMDB } from "src/consts/tmdb";

export const getMovieById = async (params: Params): Promise<any> => {
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
