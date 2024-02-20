import React from "react";
import { useRecoilValue } from "recoil";

import { isClickedState } from "../recoil";
import Hero from "../components/Hero";
import Sidebar from "../components/Sidebar";
import DetailHero from "../components/DetailHero";

const Home: React.FC = () => {
  const isClicked = useRecoilValue(isClickedState);
  return (
    <div className="w-full h-full flex justify-center">
      <Sidebar />
      {isClicked ? <DetailHero /> : <Hero />}
    </div>
  );
};

export default Home;
