import React from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Hero from "../components/Hero";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-1 justify-center">
        <Sidebar />
        <Hero />
      </div>
    </>
  );
};

export default Home;
