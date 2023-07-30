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

  useEffect(() => {
    MovieInfosCtx.searchMovieKeyword;
  }, []);
  
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-[50%] h-full flex justify-start">
        <button
          className="mr-10 mt-7 text-3xl font-extrabold drop-shadow-lg hover:text-slate-700 duration-100"
          onClick={() => {
            setIsBoxOffice(true);
            setIsUpcoming(false);
          }}
        >
          박스오피스
        </button>
        <button
          className="mt-7 text-3xl font-extrabold drop-shadow-lg hover:text-slate-700 duration-100"
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
        className="w-[50%] p-5 my-10 opacity-40 rounded-lg text-2xl shadow-xl"
        type="text"
        placeholder="영화를 검색해보세요."
        onChange={(e) => {
          MovieInfosCtx.setSearchMovieKeyword(e.target.value);
        }}
      />
      {searchedMovie &&
      
      MovieInfosCtx.searchMovieKeyword ? (
        <SearchedMovieBox
          searchedMovie={searchedMovie}
          clickedToFocus={clickedToFocus}
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
