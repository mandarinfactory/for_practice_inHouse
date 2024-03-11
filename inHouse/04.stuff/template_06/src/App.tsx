import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";

import Home from "./page/Home";
import SuspenseBox from "./page/SuspenseBox";
import MainBox from "./components/hero/MainBox";
import NewReleases from "./components/hero/NewReleases";
import DetailTracks from "./components/detail/DetailTracks";
import DetailAlbumTracks from "./components/detail/DetailAlbumTracks";

export const App: React.FC = () => {
  return (
    <RecoilRoot>
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
    </RecoilRoot>
  );
};

