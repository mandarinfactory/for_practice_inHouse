import CinemaMap from "../CinemaMap";

export default function Hero({
  isLoading,
  moviesInfo,
  searchedMovie,
  searchMovieKeyword,
  setSearchMovieKeyword,
}) {
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
                className="p-2 my-1 bg-white backdrop-filter backdrop-blur-md bg-opacity-10 border-gray-200 shadow-md animate-fade-left duration-100"
                key={movie.movieCd}
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
        <div className="flex flex-col justify-center items-start w-[50%] p-5 my-10 bg-white rounded-xl backdrop-filter backdrop-blur-md bg-opacity-10 border-gray-200 shadow-xl">
          {searchedMovie.map((movie, i) => (
            <div
              className="w-full flex flex-row justify-between items-center"
              key={i}
            >
              <h2
                className="my-3 text-xl text-gray-800 hover:text-black cursor-pointer"
                key={i}
              >
                {movie.title.includes("!")
                  ? movie.title.replace(/!HS?E?/ig, "")
                  :  movie.title}
              </h2>
              <p className="text-sm italic text-gray-900">
                {movie.genre} / {movie.titleEng}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <></>
      )}
      <CinemaMap />
    </div>
  );
}
