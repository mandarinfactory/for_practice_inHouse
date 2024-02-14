import React, { Suspense } from "react";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import Home from "./page/Home";

const queryClient = new QueryClient();

export const App: React.FC = () => {
  return (
      <Suspense
        fallback={
          <div>
            <h1>로딩중!!!!</h1>
          </div>
        }
      >
        <RecoilRoot>
          <QueryClientProvider client={queryClient}>
            <Home />
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </RecoilRoot>
      </Suspense>
  );
};
