import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Hero from "./components/screens/Hero";
import AboutMe from "./components/screens/AboutMe";
import Projects from "./components/screens/Projects";
import Contact from "./components/screens/Contact";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
