import React from "react";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import Home from "./page/Home";

const queryClient = new QueryClient();

export const App: React.FC = () => {
  return (
    <>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <Home />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </RecoilRoot>
    </>
  );
};
