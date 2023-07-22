import { useEffect, useState } from "react";
import DetailMovieInfos from "./DetailMovieInfos";
import NotUpdatedInfos from "./NotUpdatedInfos";
import BoxOffice from "./BoxOffice";
import SearchedMovieBox from "./SearchedMovieBox";
import Upcoming from "./UpComing";
import { useRef } from "react";

export default function Hero({
  isLoading,
  moviesInfo,
  searchedMovie,
  searchMovieKeyword,
  setSearchMovieKeyword,
  boxesMoviesInfo,
  movieVal,
  setMovieVal,
  detailMovieInfos,
  setDetailMovieInfos,
  upcomings,
}) {
  const clickedToFocus = useRef();
  const [notUpdatedInfos, setNotUpdatedInfos] = useState(false);
  const [isBoxOffice, setIsBoxOffice] = useState(true);
  const [isUpcoming, setIsUpcoming] = useState(false);

  useEffect(() => {
    searchMovieKeyword;
  }, []);

  useEffect(() => {
    clickedToFocus
  },[clickedToFocus])

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-[50%] h-full flex justify-start">
        <button
          className="mr-10 mt-7 text-3xl font-extrabold drop-shadow-lg hover:text-gray-800"
          onClick={() => {
            setIsBoxOffice(true);
            setIsUpcoming(false);
          }}
        >
          박스오피스
        </button>
        <button
          className="mt-7 text-3xl font-extrabold drop-shadow-lg hover:text-gray-800"
          onClick={() => {
            setIsBoxOffice(false);
            setIsUpcoming(true);
          }}
        >
          상영예정작
        </button>
      </div>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <BoxOffice
          isLoading={isLoading}
          isBoxOffice={isBoxOffice}
          moviesInfo={moviesInfo}
          boxesMoviesInfo={boxesMoviesInfo}
          setSearchMovieKeyword={setSearchMovieKeyword}
          setMovieVal={setMovieVal}
          setDetailMovieInfos={setDetailMovieInfos}
          setNotUpdatedInfos={setNotUpdatedInfos}
        />
        <Upcoming
          isLoading={isLoading}
          isUpcoming={isUpcoming}
          upcomings={upcomings}
          setMovieVal={setMovieVal}
          setDetailMovieInfos={setDetailMovieInfos}
          setSearchMovieKeyword={setSearchMovieKeyword}
          boxesMoviesInfo={boxesMoviesInfo}
          setNotUpdatedInfos={setNotUpdatedInfos}
        />
      </div>
      <input
        className="w-[50%] p-5 my-10 opacity-40 rounded-lg text-2xl shadow-xl"
        type="text"
        placeholder="영화를 검색해보세요."
        onChange={(e) => {
          setSearchMovieKeyword(e.target.value);
        }}
      />
      {searchedMovie &&
      !searchMovieKeyword.includes(" ") &&
      searchMovieKeyword ? (
        <SearchedMovieBox
          setMovieVal={setMovieVal}
          setDetailMovieInfos={setDetailMovieInfos}
          searchedMovie={searchedMovie}
          clickedToFocus={clickedToFocus}
        />
      ) : (
        <></>
      )}
      {detailMovieInfos ? (
        <DetailMovieInfos
          clickedToFocus={clickedToFocus}
          movieVal={movieVal}
          boxesMoviesInfo={boxesMoviesInfo}
          setDetailMovieInfos={setDetailMovieInfos}
        />
      ) : (
        <></>
      )}
      {notUpdatedInfos ? (
        <NotUpdatedInfos setNotUpdatedInfos={setNotUpdatedInfos} />
      ) : (
        <></>
      )}
    </div>
  );
}
