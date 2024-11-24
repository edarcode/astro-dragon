import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Slot from "./Slot";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true,
      staleTime: 24 * 60 * 60 * 1000, // 24h
    },
  },
});

export default function Movies() {
  return (
    <QueryClientProvider client={queryClient}>
      <Slot />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
