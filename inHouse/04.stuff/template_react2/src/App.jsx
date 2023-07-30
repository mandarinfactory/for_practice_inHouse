import { useState, useEffect, useContext } from "react";
import Layout from "./components/Layout";
import Hero from "./components/screen/Hero";
import MovieCurations from "./components/screen/MovieCurations";
import { MovieInfoContextStore } from "./contexts"; 

function App() {
  const KOBIS_KEY = "03d2542e7c0e7e77045f52c5567f0546";
  const KMDB_KEY = "Y9097046I5G4HIUSN831";
  const TMDB_KEY = "deec042ed38d5c0d68aaeedf6f2a9ae3";
  const genre = [
    "SF",
    "공포",
    "로맨스",
    "액션",
    "범죄",
    "스릴러",
    "전쟁",
    "스포츠",
    "판타지",
    "뮤지컬",
    "가족",
    "미스터리",
    "애니메이션",
    "어드벤처",
  ];
  const randomNumber = Math.floor(Math.random() * 14);

  const MovieInfosCtx = useContext(MovieInfoContextStore);

  const year = new Date().getFullYear();
  const month = ("0" + (new Date().getMonth() + 1)).slice(-2);
  const day = ("0" + new Date().getDate()).slice(-2);
  const date = parseInt(year + month + day);

  const [genres, setGenres] = useState(genre[randomNumber]);
  const [searchedMovie, setSearchedMovie] = useState();
  const [curatedMovie, setCuratedMovie] = useState();
  const [upcomings, setUpcomings] = useState();

  const getBoxOfficeInfo = async () => {
    const json = await (
      await fetch(
        `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${KOBIS_KEY}&targetDt=${
          date - 1
        }&itemPerPage=5`
      )
    ).json();
    MovieInfosCtx.setMoviesInfo(json.boxOfficeResult.dailyBoxOfficeList);
    MovieInfosCtx.setIsLoading(false);
  };

  const getSearchMovieInfo = async () => {
    const json = await (
      await fetch(
        `http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&ServiceKey=${KMDB_KEY}&query=${MovieInfosCtx.searchMovieKeyword}`
      )
    ).json();
    {
      MovieInfosCtx.searchMovieKeyword
        ? MovieInfosCtx.searchMovieKeyword.includes(" ")
          ? MovieInfosCtx.setBoxesMoviesInfo(json.Data[0].Result)
          : setSearchedMovie(json.Data[0].Result)
        : MovieInfosCtx.searchMovieKeyword;
    }
    MovieInfosCtx.setIsLoading(false);
  };

  const getSearchGenreMovies = async () => {
    const json = await (
      await fetch(
        `http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&ServiceKey=${KMDB_KEY}&genre=${genres}&releaseDts="20100101`
      )
    ).json();
    setCuratedMovie(json.Data[0].Result);
    MovieInfosCtx.setIsLoading(false);
  };

  const getUpComingMovies = async () => {
    const json = new Array(
      await (
        await fetch(
          `https://api.themoviedb.org/3/movie/upcoming?api_key=${TMDB_KEY}&language=ko-KR&region=KR`
        )
      ).json()
    );
    setUpcomings(json[0].results);
    MovieInfosCtx.setIsLoading(false);
  };

  useEffect(() => {
    getSearchGenreMovies();
  }, [genres]);

  useEffect(() => {
    getUpComingMovies();
    getBoxOfficeInfo();
    getSearchMovieInfo();
    MovieInfosCtx.detailMovieInfos;
  }, [MovieInfosCtx.searchMovieKeyword]);

  useEffect(() => {
    MovieInfosCtx.MovieboxesMoviesInfo;
  }, [MovieInfosCtx.MovieboxesMoviesInfo]);

  return (
    <Layout>
      <Hero
        searchedMovie={searchedMovie}
        upcomings={upcomings}
      />
      <MovieCurations
        curatedMovie={curatedMovie}
        genre={genre}
        randomNumber={randomNumber}
        genres={genres}
        setGenres={setGenres}
      />
    </Layout>
  );
}

export default App;
