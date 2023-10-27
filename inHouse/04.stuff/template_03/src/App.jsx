import { NavermapsProvider } from "react-naver-maps";

import Layout from "./components/Layout";
import Hero from "./components/screens/Hero";

function App() {
  return (
    <Layout>
      <NavermapsProvider ncpClientId={import.meta.env.VITE_NAVER_MAP_KEY}>
        <Hero />
      </NavermapsProvider>
    </Layout>
  );
}

export default App;
