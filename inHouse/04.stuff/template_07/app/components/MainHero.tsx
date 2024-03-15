import React from "react";

import RandomArtists from "./mainHero/RandomArtists";
import Playlists from "./mainHero/Playlists";

const MainHero: React.FC = () => {
  return (
    <>
      <RandomArtists />
      <Playlists />
    </>
  );
};

export default MainHero;
