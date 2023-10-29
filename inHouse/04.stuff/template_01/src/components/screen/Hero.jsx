import { useEffect, useState, useRef, useContext } from "react";
import DetailMovieInfos from "./DetailMovieInfos";
import NotUpdatedInfos from "./NotUpdatedInfos";
import BoxOffice from "./BoxOffice";
import SearchedMovieBox from "./SearchedMovieBox";
import Upcoming from "./UpComing";
import { MovieInfoContextStore } from "../../contexts";

export default function Hero({
  searchedMovie,
  upcomings,
}) {
  const clickedToFocus = useRef();
  const MovieInfosCtx = useContext(MovieInfoContextStore);

  const [notUpdatedInfos, setNotUpdatedInfos] = useState(false);
  const [isBoxOffice, setIsBoxOffice] = useState(true);
  const [isUpcoming, setIsUpcoming] = useState(false);
  
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="lg:w-[50%] sm:w-[90%] sm:ml-10 h-full flex justify-start">
        <button
          className="mr-10 mt-7 md:text-3xl sm:text-2xl drop-shadow-lg hover:text-slate-700"
          onClick={() => {
            setIsBoxOffice(true);
            setIsUpcoming(false);
          }}
        >
          박스오피스
        </button>
        <button
          className="mt-7 md:text-3xl sm:text-2xl drop-shadow-lg hover:text-slate-700"
          onClick={() => {
            setIsBoxOffice(false);
            setIsUpcoming(true);
          }}
        >
          상영예정작
        </button>
      </div>
      <div className="hero w-full h-full flex flex-col justify-center items-center">
        <BoxOffice
          isBoxOffice={isBoxOffice}
          setNotUpdatedInfos={setNotUpdatedInfos}
        />
        <Upcoming
          isUpcoming={isUpcoming}
          upcomings={upcomings}
          setNotUpdatedInfos={setNotUpdatedInfos}
          />
      </div>
      <input
        className="lg:w-[50%] sm:w-[90%] p-5 my-1 opacity-40 rounded-lg md:text-2xl sm:text-xl shadow-xl"
        type="text"
        placeholder="영화를 검색해보세요."
        onChange={(e) => {
          MovieInfosCtx.setSearchMovieKeyword(e.target.value);
          MovieInfosCtx.setInputVal(true);
        }}
        />
      {searchedMovie &&
      MovieInfosCtx.searchMovieKeyword ? (
        <SearchedMovieBox
        searchedMovie={searchedMovie}
        clickedToFocus={clickedToFocus}
        setNotUpdatedInfos={setNotUpdatedInfos}
        />
      ) : (
        <></>
      )}
      {MovieInfosCtx.detailMovieInfos ? (
        <DetailMovieInfos
          clickedToFocus={clickedToFocus}
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
