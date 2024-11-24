import { TMDB } from "../../../../consts/tmdb";
import type { PopularMovies } from "./types";

export const getPopularMovies = async (): Promise<PopularMovies> => {
  const res = await fetch(TMDB.popularMovies);

  return await res.json();
};
