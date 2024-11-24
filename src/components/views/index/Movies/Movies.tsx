import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import MovieCards from "./MovieCards";
import { useState } from "react";
import MovieDetail from "./MovieDetail";
import { persistQueryClient } from "@tanstack/react-query-persist-client";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true,
      staleTime: 24 * 60 * 60 * 1000, // 24h
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
  const [isDetails, setIsDetails] = useState(false);
  return (
    <QueryClientProvider client={queryClient}>
      {!isDetails && <MovieCards setIsDetails={setIsDetails} />}
      {isDetails && <MovieDetail setIsDetails={setIsDetails} />}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
