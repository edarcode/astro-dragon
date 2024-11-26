import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useScrollEnd } from "../../../../react/hooks/useScrollEnd";
import { useMovies } from "./useMovies.store";
import { addFiltersMovies } from "./addFiltersMovies.util";
import { getMovies } from "./getMovies.service";

export const useGetMovies = () => {
  const isScrollEnd = useScrollEnd(750);
  const filters = useMovies((movies) => movies.filters);

  const { data, isLoading, fetchNextPage } = useInfiniteQuery({
    queryKey: ["movies", filters],
    queryFn: ({ signal, pageParam: url }) => getMovies({ signal, url }),
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
