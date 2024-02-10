import React from "react";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import Home from "./page/Home";
import DetailPage from "./page/DetailPage";

const queryClient = new QueryClient();

export const App: React.FC = () => {
  return (
    <>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <Home />
          {/* <DetailPage /> */}
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </RecoilRoot>
    </>
  );
};
