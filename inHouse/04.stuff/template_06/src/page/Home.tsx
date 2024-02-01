import React from "react";

import Hero from "../components/Hero";
import Sidebar from "../components/Sidebar";

const Home: React.FC = () => {
  return (
    <div className="w-full h-full flex justify-center">
      <Sidebar />
      <Hero />
    </div>
  );
};

export default Home;
