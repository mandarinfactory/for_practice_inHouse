import { useState, useEffect } from "react";
import Layout from "./components/Layout";
import Hero from "./components/screen/Hero";

function App() {
  const KEY = "03d2542e7c0e7e77045f52c5567f0546";
  const DATE = "20230626";

  const [isLoading, setIsLoading] = useState(true);
  const [moviesInfo, setMoviesInfo] = useState([]);

  const getMovieInfo = async () => {
    const json = await (
      await fetch(
        `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${KEY}&targetDt=${DATE}`
      )
    ).json();
    console.log(json);
    setMoviesInfo(json.boxOfficeResult.dailyBoxOfficeList);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovieInfo();
  }, []);

  return (
    <Layout>
      <Hero isLoading={isLoading} moviesInfo={moviesInfo}/>
    </Layout>
  );
}

export default App;
