import { useEffect, useState } from "react";
import DetailMovieInfos from "./DetailMovieInfos";
import NotUpdatedInfos from "./NotUpdatedInfos";
import BoxOffice from "./BoxOffice";
import SearchedMovieBox from "./SearchedMovieBox";

export default function Hero({
  isLoading,
  moviesInfo,
  searchedMovie,
  searchMovieKeyword,
  setSearchMovieKeyword,
  boxOfficeInfo,
  movieVal,
  setMovieVal,
  detailMovieInfos,
  setDetailMovieInfos,
}) {
  
  const [notUpdatedInfos, setNotUpdatedInfos] = useState(false);

  useEffect(() => {
    searchMovieKeyword;
  }, []);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <BoxOffice
        isLoading={isLoading}
        moviesInfo={moviesInfo}
        boxOfficeInfo={boxOfficeInfo}
        setSearchMovieKeyword={setSearchMovieKeyword}
        setMovieVal={setMovieVal}
        setDetailMovieInfos={setDetailMovieInfos}
        setNotUpdatedInfos={setNotUpdatedInfos}
      />
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
        />
      ) : (
        <></>
      )}
      {detailMovieInfos ? (
        <DetailMovieInfos
          movieVal={movieVal}
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
