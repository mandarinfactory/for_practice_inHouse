import React from "react";

import Hero from "../components/Hero";
import Layout from "./Layout";
import VideoScreen from "./VideoScreen";

const Home: React.FC = () => {
  return (
    <>
      <Layout>
        <Hero />
      </Layout>
    </>
  );
};

export default Home;
