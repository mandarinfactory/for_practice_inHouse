import React from "react";

import Playlists from "../mainBox/Playlists";
import RandomArtists from "../mainBox/RandomArtists";

const MainBox: React.FC = () => {
  return (
    <>
      {/* <RandomArtists /> */}
      <Playlists />
    </>
  );
};

export default MainBox;
