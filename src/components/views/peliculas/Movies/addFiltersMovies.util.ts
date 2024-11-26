import { TMDB } from "../../../../consts/tmdb";

export const addFiltersMovies = (filters: Filters = {}) => {
  let newUrl = new URL(TMDB.popularMovies);

  if (filters.title) {
    newUrl = new URL(TMDB.searchMoviesByTitle);
    newUrl.searchParams.set("query", filters.title);
  }

  if (filters.page) newUrl.searchParams.set("page", filters.page);

  return newUrl.toString();
};

type Filters = {
  page?: string;
  title?: string;
};
