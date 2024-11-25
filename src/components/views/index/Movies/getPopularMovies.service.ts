import type { PopularMovies } from "./types";

export const getPopularMovies = async ({
  signal,
  url,
}: Params): Promise<PopularMovies> => {
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
