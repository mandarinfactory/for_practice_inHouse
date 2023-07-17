export default function BoxOffice({
  isLoading,
  moviesInfo,
  boxOfficeInfo,
  setMovieVal,
  setDetailMovieInfos,
  setNotUpdatedInfos,
  setSearchMovieKeyword,
}) {
  return (
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
                setSearchMovieKeyword(
                  v.target.innerText.replace(/1?2?3?4?5?./, "")
                );
                const clickedTitle = v.target.innerText.replace(
                  /1?2?3?4?5?./,
                  ""
                );
                const filteredTitle = boxOfficeInfo.find((e) => {
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
              //movieNm && titleEtc
            >
              <h3 className="mx-10 my-3 text-3xl">
                {i + 1}. {movie.movieNm}
              </h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
