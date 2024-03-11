import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";

import Home from "./page/Home";
import SuspenseBox from "./page/SuspenseBox";
import MainBox from "./components/hero/MainBox";
import NewReleases from "./components/hero/NewReleases";
import DetailTracks from "./components/detail/DetailTracks";
import DetailAlbumTracks from "./components/detail/DetailAlbumTracks";

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
              <Route path="/DetailTracks" element={<DetailTracks />} />
              <Route path="/DetailAlbumTracks" element={<DetailAlbumTracks />}/>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </QueryClientProvider>
    </RecoilRoot>
  );
};

