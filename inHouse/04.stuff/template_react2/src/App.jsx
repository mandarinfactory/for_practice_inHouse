import { useEffect } from "react";
import Layout from "./components/Layout";
import Hero from "./components/screen/Hero";
import { getMovieInfo } from "./API";

function App() {

  useEffect(() => {
    getMovieInfo();
  },[])

  return (
    <Layout>
      <Hero />
    </Layout>
  );
}

export default App;
