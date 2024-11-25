import { TMDB } from "../../../../consts/tmdb";

export const addFiltersPopularMovies = (filters: Filters = {}) => {
  const newUrl = new URL(TMDB.popularMovies);

  if (filters.page) newUrl.searchParams.set("page", filters.page);
  return newUrl.toString();
};

type Filters = {
  page?: string;
};
