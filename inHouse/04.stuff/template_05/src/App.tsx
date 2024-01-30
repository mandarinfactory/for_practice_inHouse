import React from "react";
import { BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";

import Home from "./pages/Home";
import VideoScreen from "./pages/VideoScreen";

const App: React.FC = () => {
  const AppSelector = useSelector<any>((state) =>
    state.videoScreenIsClickedApp.clickedVideo
  );
  let screen;
  if (AppSelector === "") {
    screen = <Home />
  } else {
    screen = <VideoScreen />
  }

  return (
    <>
      <BrowserRouter>{screen}</BrowserRouter>
    </>
  );
};

export default App;
