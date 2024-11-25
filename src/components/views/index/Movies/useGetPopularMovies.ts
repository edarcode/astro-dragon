import { useQuery } from "@tanstack/react-query";
import { getPopularMovies } from "./getPopularMovies.service";

export const useGetPopularMovies = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["popularMovies"],
    queryFn: getPopularMovies,
  });

  return { popularMovies: data, isLoading };
};
