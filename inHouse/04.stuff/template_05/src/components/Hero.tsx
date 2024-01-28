import React from "react";
import { useSelector } from "react-redux";

import { RootState } from "../store/store";
import FirstVideo from "./hero/FirstVideo";
import SearchVideo from "./hero/SearchVideo";
import ClickedVideo from "./hero/ClickedVideo";

const Hero: React.FC = () => {
  const searchVideoSelector = useSelector(
    (state: RootState) => state.youtubeSearchInputApp
  );
  const clickedVideoSelector = useSelector(
    (state: RootState) => state.youtubeClickedButtonPageApp
  );
  return (
    <>
      {searchVideoSelector.searchVal || clickedVideoSelector.clickedValue ? (
        <>
          {searchVideoSelector.searchVal ? <SearchVideo /> : <ClickedVideo />}
        </>
      ) : (
        <FirstVideo />
      )}
    </>
  );
};

export default Hero;
