import React from "react";
import { useSelector } from "react-redux";

import { RootState } from "./store/store";
import Home from "./pages/Home";
import VideoHome from "./pages/VideoHome";

const App: React.FC = () => {
  const videoSelector = useSelector(
    (state: RootState) => state.videoScreenIsClickedApp.clickedVideo
  );

  let screen;
  if (!videoSelector) {
    screen = <Home />;
  } else {
    screen = <VideoHome />;
  }
  return <>{screen}</>;
};

export default App;
