import React from "react";

import RandomArtists from "./mainHero/RandomArtists";
import Playlists from "./mainHero/Playlists";

const MainHero: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row">
      <RandomArtists />
      <Playlists />
    </div>
  );
};

export default MainHero;
