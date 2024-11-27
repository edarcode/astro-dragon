import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useScrollEnd } from "../../../../react/hooks/useScrollEnd";
import { useMovies } from "./useMovies.store";
import { getMovies } from "./getMovies.service";
import { TMDB } from "src/consts/tmdb";

export const useGetMovies = () => {
  const isScrollEnd = useScrollEnd(750);
  const filters = useMovies((movies) => movies.filters);

  const { data, isLoading, fetchNextPage } = useInfiniteQuery({
    queryKey: ["movies", filters],
    queryFn: ({ signal, pageParam }) => getMovies({ signal, url: pageParam }),
    initialPageParam: TMDB.getUrlMovies(filters).url,
    getNextPageParam: (lastPage) =>
      TMDB.getUrlMovies({ ...filters, page: lastPage.page }).nextUrl,
  });

  useEffect(() => {
    if (!isScrollEnd) return;
    fetchNextPage();
  }, [isScrollEnd]);

  const movies = data?.pages.map((item) => item.results).flat();

  return { movies: movies ?? [], isLoading };
};
