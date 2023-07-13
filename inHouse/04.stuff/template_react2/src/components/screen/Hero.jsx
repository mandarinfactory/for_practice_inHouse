import { useEffect, useState } from "react";
import DetailMovieInfos from "./DetailMovieInfos";
import NotUpdatedInfos from "./NotUpdatedInfos";

export default function Hero({
  isLoading,
  moviesInfo,
  searchedMovie,
  searchMovieKeyword,
  setSearchMovieKeyword,
  boxOfficeInfo,
}) {
  const [movieVal, setMovieVal] = useState();
  const [detailMovieInfos, setDetailMovieInfos] = useState(false);
  const [notUpdatedInfos, setNotUpdatedInfos] = useState(false);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-[50%]">
        {isLoading ? (
          <h1 className="p-10 text-3xl">로딩중......</h1>
        ) : (
          <div className="w-full p-5 my-10 bg-white rounded-xl backdrop-filter backdrop-blur-md bg-opacity-10 border-gray-200 shadow-xl">
            <h1 className="my-7 text-3xl font-extrabold">현재 박스오피스</h1>
            {moviesInfo.map((movie, i) => (
              <div
                className="p-2 my-1 bg-white backdrop-filter backdrop-blur-md bg-opacity-10 border-gray-200 shadow-md animate-fade-left duration-100 hover:bg-slate-200 cursor-pointer"
                data-key={movie.movieCd}
                key={movie.movieCd}
                onClick={(v) => {
                  console.log(searchMovieKeyword);
                  setSearchMovieKeyword(
                    v.target.innerText.replace(/1?2?3?4?5?./, "")
                  );
                  const clickedKey = v.currentTarget.getAttribute("data-key");
                  const filteredInfo = boxOfficeInfo.find((e) => {
                    return e.Codes.Code[0].CodeNo == clickedKey;
                  });
                  if (filteredInfo !== undefined) {
                    setMovieVal(filteredInfo);
                    setDetailMovieInfos(true);
                  } else {
                    setNotUpdatedInfos(true);
                  }
                }}
              >
                <h3 className="mx-10 my-3 text-3xl">
                  {i + 1}. {movie.movieNm}
                </h3>
              </div>
            ))}
          </div>
        )}
      </div>
      <input
        className="w-[50%] p-5 my-10 opacity-40 rounded-lg text-2xl shadow-xl"
        type="text"
        placeholder="영화를 검색해보세요."
        onChange={(e) => {
          setSearchMovieKeyword(e.target.value);
        }}
      />
      {searchedMovie && searchMovieKeyword ? (
        <div className="flex flex-col justify-center items-start w-[50%] p-5 my-10 bg-white rounded-xl backdrop-filter backdrop-blur-md bg-opacity-50 border-gray-200 shadow-xl">
          {searchedMovie.map((movie, i) => (
            <div
              className="w-full p-2 flex flex-row justify-between items-center duration-100 hover:bg-slate-200 bg-opacity-70 cursor-pointer rounded-lg"
              key={i}
              onClick={() => {
                setDetailMovieInfos(true);
                setMovieVal(searchedMovie[i]);
              }}
            >
              <div className="flex flex-col justify-center items-start">
                <h2 className="my-3 text-2xl font-bold text-black" key={i}>
                  {movie.title.includes("!")
                    ? movie.title.replace(/!HS?E?/gi, "")
                    : movie.title}
                </h2>
                <div>
                  {movie.posters ? (
                    <div className="w-[40%] h-auto object-contain shadow-lg">
                      <img
                        src={
                          movie.posters.includes("|")
                            ? movie.posters.substring(
                                0,
                                movie.posters.indexOf("|")
                              )
                            : movie.posters
                        }
                        alt="movie-poster"
                      />
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              <p className="text-sm italic text-gray-900">
                {movie.genre} / {movie.titleEng}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <></>
      )}
      {detailMovieInfos ? (
        <DetailMovieInfos
          movieVal={movieVal}
          setDetailMovieInfos={setDetailMovieInfos}
        />
      ) : (
        <NotUpdatedInfos
        notUpdatedInfos={notUpdatedInfos}
        setNotUpdatedInfos={setNotUpdatedInfos}
        />
      )}
    </div>
  );
}
