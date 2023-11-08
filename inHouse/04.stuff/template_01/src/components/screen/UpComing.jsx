import { useEffect, useContext } from "react";
import { MovieInfoContextStore } from "../../contexts";

export default function Upcoming({
  isUpcoming,
  upcomings,
  setNotUpdatedInfos,
}) {
  const MovieInfosCtx = useContext(MovieInfoContextStore);

  const clickHandler = (v) => {
    MovieInfosCtx.setInputVal(false);
    const clickedTitle = v.target.innerText.replace(/1?2?3?4?5?./, "  ");
    MovieInfosCtx.setSearchMovieKeyword(clickedTitle);
  };

  useEffect(() => {
    if (MovieInfosCtx.searchMovieKeyword !== undefined) {
      const filteredTitle = MovieInfosCtx.boxesMoviesInfo?.find((e) => {
        return (
          e.titleEtc.substring(0, e.titleEtc.indexOf("^")) ==
          MovieInfosCtx.searchMovieKeyword?.replace(/ /g, "")
        );
      });
      if (filteredTitle !== undefined) {
        MovieInfosCtx.setMovieVal(filteredTitle);
        MovieInfosCtx.setDetailMovieInfos(true);
        setNotUpdatedInfos(false);
      } else if (filteredTitle === undefined && !MovieInfosCtx.inputVal) {
        setNotUpdatedInfos(true);
      }
    }
  }, [MovieInfosCtx.searchMovieKeyword, MovieInfosCtx.boxesMoviesInfo]);

  {
    upcomings ? (upcomings.length = 5) : <></>;
  }
  return (
    <>
      {isUpcoming ? (
        <div className="lg:w-[50%] sm:w-[90%]">
          {MovieInfosCtx.isLoading ? (
            <h1 className="p-10 lg:text-3xl md:text-2xl sm:text-xl">
              로딩중......
            </h1>
          ) : (
            <div className="here w-full p-5 my-3 bg-white rounded-xl backdrop-filter backdrop-blur-md bg-opacity-10 border-gray-200 shadow-xl">
              {upcomings.map((movie, i) => (
                <div
                  className="p-2 my-1 bg-white backdrop-filter backdrop-blur-md bg-opacity-10 border-gray-200 shadow-md animate-fade-left duration-100 hover:bg-slate-200 cursor-pointer"
                  data-key={movie.id}
                  key={movie.id}
                  onClick={clickHandler}
                >
                  <h3 className="mx-10 my-3 lg:text-3xl md:text-2xl sm:text-xl">
                    {i + 1}. {movie.title}
                  </h3>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
