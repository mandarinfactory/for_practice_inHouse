import React from "react";

import RandomArtists from "./mainHero/RandomArtists";
import Playlists from "./mainHero/Playlists";

const MainHero: React.FC = () => {
  return (
    <div>
      <RandomArtists />
      <Playlists />
    </div>
  );
};

export default MainHero;
