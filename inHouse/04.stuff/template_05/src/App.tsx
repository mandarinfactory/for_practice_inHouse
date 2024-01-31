import React from "react";
import { BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";

import Home from "./pages/Home";
import VideoHome from "./pages/VideoHome";

const App: React.FC = () => {
  const AppSelector = useSelector<any>(
    (state) => state.videoScreenIsClickedApp.clickedVideo
  );

    let screen;
    if (!AppSelector) {
      screen = <Home />;
    } else {
      screen = <VideoHome />;
    }
  return (
    <>
      <BrowserRouter>{screen}</BrowserRouter>
    </>
  );
};

export default App;
