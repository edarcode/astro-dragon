import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import MovieCards from "./MovieCards";
import { persistQueryClient } from "@tanstack/react-query-persist-client";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { useMovies } from "./useMovies.store";
import MovieDetails from "./MovieDetails";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true,
      staleTime: 24 * 60 * 60 * 1000, // 24h
      retry: 2,
    },
  },
});

const localStoragePersister = createSyncStoragePersister({
  storage: window.localStorage,
});

persistQueryClient({
  queryClient,
  persister: localStoragePersister,
});

export default function Movies() {
  const isMovieDetails = useMovies((movies) => movies.isMovieDetails);

  return (
    <QueryClientProvider client={queryClient}>
      {!isMovieDetails && <MovieCards />}
      {isMovieDetails && <MovieDetails />}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
