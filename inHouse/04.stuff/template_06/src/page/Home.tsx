import React from "react";
import { useRecoilValue } from "recoil";

import { isClickedState } from "../api/recoil/atom";
import Hero from "../components/Hero";
import Sidebar from "../components/Sidebar";
import DetailPlaylists from "../components/detail/DetailPlaylists";

const Home: React.FC = () => {
  const isClicked = useRecoilValue(isClickedState);
  return (
    <div className="w-full h-full flex justify-center">
      <Sidebar />
      {isClicked ? <DetailPlaylists /> : <Hero />}
    </div>
  );
};

export default Home;
