import { useState, useEffect } from "react";
import Layout from "./components/Layout";
import Hero from "./components/screen/Hero";
import MovieCurations from "./components/screen/MovieCurations";

function App() {
  const KEY = "03d2542e7c0e7e77045f52c5567f0546";
  const ALTKEY = "Y9097046I5G4HIUSN831";
  const DATE = "20230626";
  const genre = ["SF", "공포", "로맨스", "액션", "범죄", "스릴러", "전쟁", "스포츠", "판타지", "뮤지컬"]
  const randomNumber = Math.floor(Math.random()* 10)

  const [isLoading, setIsLoading] = useState(true);
  const [moviesInfo, setMoviesInfo] = useState([]);
  const [searchMovieKeyword, setSearchMovieKeyword] = useState();
  const [searchedMovie, setSearchedMovie] = useState();
  const [boxOfficeInfo, setBoxOfficeInfo] = useState();
  const [genres, setGenres] =useState(genre[randomNumber]);
  const [curatedMovie, setCuratedMovie] = useState();
  const [movieVal, setMovieVal] = useState();
  const [detailMovieInfos, setDetailMovieInfos] = useState(false);

  const getBoxOfficeInfo = async () => {
    const json = await (
      await fetch(
        `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${KEY}&targetDt=${DATE}&itemPerPage=5`
      )
    ).json();
    setMoviesInfo(json.boxOfficeResult.dailyBoxOfficeList);
    setIsLoading(false);
  };

  const getSearchMovieInfo = async () => {
    const json = await (
      await fetch(
        `http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&ServiceKey=${ALTKEY}&query=${searchMovieKeyword}`
      )
    ).json();
    {
      searchMovieKeyword.includes(" ")
        ? setBoxOfficeInfo(json.Data[0].Result)
        : setSearchedMovie(json.Data[0].Result);
    }
    setIsLoading(false);
  };
  
  const getSearchGenreMovies = async () => {
    const json = await (
      await fetch(
        `http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&ServiceKey=${ALTKEY}&genre=${genres}&releaseDts="20100101`
      )
    ).json();
    setCuratedMovie(json.Data[0].Result)
    setIsLoading(false);
  };

  useEffect(() => {
    getBoxOfficeInfo();
    getSearchGenreMovies();
    getSearchGenreMovies();
  }, []); // 브라우저가 실행될때 한번만 됨

  useEffect(() => {
    getBoxOfficeInfo();
    getSearchMovieInfo();
  }, [searchMovieKeyword]); // []내 해당 state가 변경될때마다 새로고침 됨

  return (
    <Layout>
      <Hero
        isLoading={isLoading}
        moviesInfo={moviesInfo}
        searchedMovie={searchedMovie}
        searchMovieKeyword={searchMovieKeyword}
        setSearchMovieKeyword={setSearchMovieKeyword}
        boxOfficeInfo={boxOfficeInfo}
        setBoxOfficeInfo={setBoxOfficeInfo}
        movieVal={movieVal}
        setMovieVal={setMovieVal}
        detailMovieInfos={detailMovieInfos}
        setDetailMovieInfos={setDetailMovieInfos}
        />
      <MovieCurations 
        curatedMovie={curatedMovie}
        setMovieVal={setMovieVal}
        setDetailMovieInfos={setDetailMovieInfos}
      />
    </Layout>
  );
}

export default App;
