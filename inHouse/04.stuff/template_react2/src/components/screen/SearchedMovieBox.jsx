export default function SearchedMovieBox({
  setDetailMovieInfos,
  setMovieVal,
  searchedMovie,
}) {
  return (
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
                        ? movie.posters.substring(0, movie.posters.indexOf("|"))
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
            {movie.genre} / {movie.titleEng.includes("!")
                ? movie.titleEng.replace(/!HS?E?/gi, "")
                : movie.titleEng}
          </p>
        </div>
      ))}
    </div>
  );
}
