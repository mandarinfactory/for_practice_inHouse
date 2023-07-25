import { useEffect } from "react";

export default function Upcoming({
  isLoading,
  isUpcoming,
  upcomings,
  setMovieVal,
  setDetailMovieInfos,
  setSearchMovieKeyword,
  boxesMoviesInfo,
  setNotUpdatedInfos,
}) {
  useEffect(() => {
    upcomings
  },[upcomings])
  return (
    <>
      {upcomings ? upcomings.length = 5 : upcomings}
      {isUpcoming ? (
        <div className="w-[50%]">
          {isLoading ? (
            <h1 className="p-10 text-3xl">로딩중......</h1>
          ) : (
            <div className="w-full p-5 my-3 bg-white rounded-xl backdrop-filter backdrop-blur-md bg-opacity-10 border-gray-200 shadow-xl">
              {upcomings.map((movie, i) => (
                <div
                  className="p-2 my-1 bg-white backdrop-filter backdrop-blur-md bg-opacity-10 border-gray-200 shadow-md animate-fade-left duration-100 hover:bg-slate-200 cursor-pointer"
                  data-key={movie.id}
                  key={movie.id}
                  onClick={(v) => {
                    setSearchMovieKeyword(
                      v.target.innerText.replace(/1?2?3?4?5?./, "")
                    );
                    const clickedTitle = v.target.innerText.replace(
                      /1?2?3?4?5?./,
                      ""
                    );
                    const filteredTitle = boxesMoviesInfo.find((e) => {
                      return (
                        e.titleEtc.substring(0, e.titleEtc.indexOf("^")) ==
                        clickedTitle.replace(/ /g, "")
                      );
                    });
                    if (filteredTitle !== undefined) {
                      setMovieVal(filteredTitle);
                      setDetailMovieInfos(true);
                      setNotUpdatedInfos(false);
                    } else {
                      setNotUpdatedInfos(true);
                    }
                  }}
                >
                  <h3 className="mx-10 my-3 text-3xl">
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
