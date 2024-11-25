import type { PopularMovies } from "./types";

export const getPopularMovies = async (
  params: Params
): Promise<PopularMovies> => {
  const { signal, url } = params;

  console.log("fetch", url);

  const res = await fetch(url, {
    method: "GET",
    signal,
  });

  return await res.json();
};

type Params = {
  signal: AbortSignal;
  url: string;
};
