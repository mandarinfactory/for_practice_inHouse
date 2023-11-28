import { NavermapsProvider } from "react-naver-maps";
// React NaverMaps라는 library를 이용해서 네이버 지도를 사용했습니다.

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
