import {
  QueryClientProviderProps,
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";
import { Hydrate } from "react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";

export const ReactQueryWrapper: React.FC<QueryClientProviderProps> = ({
  children,
}) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <Hydrate state={pageProps.dehydratedState}>{children}</Hydrate>
    </QueryClientProvider>
  );
};
