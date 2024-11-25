import { useInfiniteQuery } from "@tanstack/react-query";
import { getPopularMovies } from "./getPopularMovies.service";

import { useEffect } from "react";
import { useScrollEnd } from "../../../../react/hooks/useScrollEnd";
import { useMovies } from "./useMovies.store";
import { addFiltersMovies } from "./addFiltersMovies.util";

export const useGetMovies = () => {
  const isScrollEnd = useScrollEnd(1000);
  const filters = useMovies((movies) => movies.filters);

  const { data, isLoading, fetchNextPage } = useInfiniteQuery({
    queryKey: ["movies", filters],
    queryFn: ({ signal, pageParam: url }) => getPopularMovies({ signal, url }),
    initialPageParam: addFiltersMovies({ page: "1", title: filters.title }),
    getNextPageParam: (lastPageMovies) => {
      return addFiltersMovies({
        page: String(lastPageMovies.page + 1),
        title: filters.title,
      });
    },
  });

  useEffect(() => {
    if (!isScrollEnd) return;
    fetchNextPage();
  }, [isScrollEnd]);

  const movies = data?.pages.map((item) => item.results).flat();

  return { movies: movies ?? [], isLoading };
};
