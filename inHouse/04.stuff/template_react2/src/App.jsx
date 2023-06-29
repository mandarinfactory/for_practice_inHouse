import { useState, useEffect } from "react";
import Layout from "./components/Layout";
import Hero from "./components/screen/Hero";

function App() {
  const KEY = "03d2542e7c0e7e77045f52c5567f0546";
  const DATE = "20230626";

  const [isLoading, setIsLoading] = useState(true);
  const [moviesInfo, setMoviesInfo] = useState([]);
  const [searchMovieKeyword, setSearchMovieKeyword] = useState("");
  const [searchedMovie, setSearchedMovie] = useState();

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
      await fetch(
        `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=${KEY}&movieNm=${searchMovieKeyword}`
      )
    ).json();
    setSearchedMovie(json.movieListResult.movieList);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovieInfo();
  }, []); // 브라우저가 실행될때 한번만 됨

  useEffect(() => {
    getMovieInfo();
    searchMovieInfo();
  }, [searchMovieKeyword]); // []내 해당 state가 변경될때마다 새로고침 됨

  return (
    <Layout>
      <Hero
        isLoading={isLoading}
        moviesInfo={moviesInfo}
        searchedMovie={searchedMovie}
        searchMovieKeyword={searchMovieKeyword}
        setSearchMovieKeyword={setSearchMovieKeyword}
      />
    </Layout>
  );
}

export default App;
