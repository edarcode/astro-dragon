import { useInfiniteQuery } from "@tanstack/react-query";
import { getPopularMovies } from "./getPopularMovies.service";
import { TMDB } from "../../../../consts/tmdb";
import { addFiltersPopularMovies } from "./addFiltersPopularMovies.util";
import { useEffect } from "react";
import { useScrollEnd } from "../../../../react/hooks/useScrollEnd";

export const useGetPopularMovies = () => {
  const isScrollEnd = useScrollEnd(1000);

  const { data, isLoading, fetchNextPage } = useInfiniteQuery({
    queryKey: ["popularMovies"],
    queryFn: ({ signal, pageParam: url }) => getPopularMovies({ signal, url }),
    initialPageParam: TMDB.popularMovies,
    getNextPageParam: (lastPageOfPopularMovies) =>
      addFiltersPopularMovies({
        page: String(lastPageOfPopularMovies.page + 1),
      }),
  });

  useEffect(() => {
    if (!isScrollEnd) return;
    fetchNextPage();
  }, [isScrollEnd]);

  const popularMovies = data?.pages.map((item) => item.results).flat();

  return { popularMovies: popularMovies ?? [], isLoading };
};
