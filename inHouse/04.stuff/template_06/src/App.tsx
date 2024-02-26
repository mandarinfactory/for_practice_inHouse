import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import Home from "./page/Home";
import SuspenseBox from "./page/SuspenseBox";
import MainBox from "./components/hero/MainBox";
import NewReleases from "./components/hero/NewReleases";
import DetailHero from "./components/DetailHero";

const queryClient = new QueryClient();

export const App: React.FC = () => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Suspense fallback={<SuspenseBox />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/MainBox" element={<MainBox />} />
              <Route path="/NewReleases" element={<NewReleases />} />
              <Route path="/DetailHero" element={<DetailHero />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </RecoilRoot>
  );
};
