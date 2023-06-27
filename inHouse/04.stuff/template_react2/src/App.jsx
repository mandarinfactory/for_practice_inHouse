import { useState, useEffect } from "react";
import Layout from "./components/Layout";
import Hero from "./components/screen/Hero";

function App() {
  const KEY = "03d2542e7c0e7e77045f52c5567f0546";
  const DATE = "20230626";

  const [isLoading, setIsLoading] = useState(true);
  const [moviesInfo, setMoviesInfo] = useState([]);
  const [searchedMovie, setSearchedMovie] = useState([]);

  const getMovieInfo = async () => {
    const json = await (
      await fetch(
        `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${KEY}&targetDt=${DATE}&itemPerPage=5`
      )
    ).json();
    setMoviesInfo(json.boxOfficeResult.dailyBoxOfficeList);
    setIsLoading(false);
  };
  
  const searchMovieInfo = async () => {
    const json = await (
      await fetch (
        `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=${KEY}&movieNm=스타워즈`
        )
        ).json();
        console.log(json.movieListResult.movieList);
        setSearchedMovie(json.movieListResult.movieList);
        setIsLoading(false);
  }

  useEffect(() => {
    getMovieInfo();
    searchMovieInfo();
  }, []);

  return (
    <Layout>
      <Hero isLoading={isLoading} moviesInfo={moviesInfo} />
    </Layout>
  );
}

export default App;
