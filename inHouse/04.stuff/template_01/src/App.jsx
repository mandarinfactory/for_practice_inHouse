import React, { useState, useEffect, useContext } from "react";

import { MovieInfoContextStore } from "./contexts";
import {
  getBoxOfficeInfo,
  getSearchMovieInfo,
  getSearchGenreMovies,
  getUpComingMovies,
} from "./api/index";
import Layout from "./components/Layout";
import Hero from "./components/screen/Hero";
import MovieCurations from "./components/screen/MovieCurations";
import MovieTrailerBox from "./components/screen/MovieTrailerBox";

function App() {
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
  ]; // 장르배열을 따로 하드코딩으로 만들었습니다.

  const randomNumber = Math.floor(Math.random() * 14);
  // 배열내 있는 장르 갯수만큼 무작위로 돌릴수 있게 무작위 숫자를 지정해서
  const MovieInfosCtx = useContext(MovieInfoContextStore);

  const [genres, setGenres] = useState(genre[randomNumber]);
  // 해당배열의 무작위로 나온 값을 state에 넣어줬습니다.
  const [searchedMovie, setSearchedMovie] = useState();
  const [curatedMovie, setCuratedMovie] = useState();
  const [upcomings, setUpcomings] = useState();

  useEffect(() => {
    getSearchGenreMovies(setCuratedMovie, MovieInfosCtx, genres);
  }, [genres]);

  useEffect(() => {
    getUpComingMovies(setUpcomings, MovieInfosCtx);
    getBoxOfficeInfo(MovieInfosCtx);
    getSearchMovieInfo(MovieInfosCtx, setSearchedMovie);
  }, [MovieInfosCtx.searchMovieKeyword]);

  return (
    <>
      <Layout>
      {MovieInfosCtx.isTrailerClicked ? <MovieTrailerBox /> : undefined}
        <Hero searchedMovie={searchedMovie} upcomings={upcomings} />
        <MovieCurations
          curatedMovie={curatedMovie}
          genre={genre}
          randomNumber={randomNumber}
          genres={genres}
          setGenres={setGenres}
        />
      </Layout>
    </>
  );
}

export default App;
