import { NavermapsProvider } from "react-naver-maps";

import Layout from "./components/Layout";
import Hero from "./components/screens/Hero";

function App() {
  return (
    <Layout>
      <NavermapsProvider ncpClientId="ia4i567onk">
        <Hero />
      </NavermapsProvider>
    </Layout>
  );
}

export default App;
