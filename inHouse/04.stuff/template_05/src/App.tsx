import React from "react";
import { useSelector } from "react-redux";

import { RootState } from "./store/store";
import Home from "./pages/Home";
import VideoHome from "./pages/VideoHome";
import ChannelHome from "./pages/ChannelHome";

const App: React.FC = () => {
  const VideoSelector = useSelector(
    (state: RootState) => state.videoScreenIsClickedApp.clickedVideo
  );
  const ChannelSelector = useSelector(
    (state: RootState) => state.channelInfosApp.channelInfos
  );

  let screen;
  if (!VideoSelector && !ChannelSelector) {
    screen = <Home />;
  } else if (VideoSelector && !ChannelSelector) {
    screen = <VideoHome />;
  } else if (VideoSelector && ChannelSelector) {
    screen = <ChannelHome />;
  } else {
    screen = <Home />;
  }
  return (
    <>
      {screen}
    </>
  );
};

export default App;
