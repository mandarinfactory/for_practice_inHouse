import { useEffect, useContext } from "react";
import { MovieInfoContextStore } from "../../contexts";

export default function BoxOffice({ isBoxOffice, setNotUpdatedInfos }) {
  const MovieInfosCtx = useContext(MovieInfoContextStore); 
  // 모든 state를 관리하기 위해서 contextAPI를 이용했습니다.(추후 redux 배워서 redux로 바꿀 예정)

  const clickHandler = (v) => {
    MovieInfosCtx.setInputVal(false);
    const clickedTitle = v.target.innerText.replace(/1?2?3?4?5?./, "  ");
    MovieInfosCtx.setSearchMovieKeyword(clickedTitle);
    // API에서 가져온 데이터들을 clickedTitle로 변수화해서 상세정보API에 줄 state값으로 넣어줍니다.
    // clickhandler 함수가 특정 영화를 클릭시, 실행되게 해줍니다.
  };

  useEffect(() => {
    if (MovieInfosCtx.searchMovieKeyword !== undefined) {
      const filteredTitle = MovieInfosCtx.boxesMoviesInfo?.find((e) => {
        return (
          e.titleEtc.substring(0, e.titleEtc.indexOf("^")) ==
          MovieInfosCtx.searchMovieKeyword?.replace(/ /g, "")
        );
      });
      // searchMovieKeyword에서 통해 받은 API에서 state에 저장한 값을
      //  다시 필터링을 통해 상세영화페이지 modal창에 줄 데이터를 만들었습니다.
      if (filteredTitle !== undefined) {
        MovieInfosCtx.setMovieVal(filteredTitle);
        MovieInfosCtx.setDetailMovieInfos(true);
        setNotUpdatedInfos(false);
      } else if (filteredTitle === undefined && !MovieInfosCtx.inputVal) {
        setNotUpdatedInfos(true);
        // 만약, state에 저장한 값이 undefined면 정보를 불러올 수 없다는 modal을 true로 변경해줍니다.
      }
    }
  }, [
    MovieInfosCtx.searchMovieKeyword,
    MovieInfosCtx.boxesMoviesInfo,
    setNotUpdatedInfos,
  ]);

  return (
    <>
      {isBoxOffice ? (
        <div className="lg:w-[50%] md:w-[50%] sm:w-[90%]">
          {MovieInfosCtx.isLoading ? (
            <h1 className="p-10 lg:text-3xl md:text-2xl sm:text-xl">
              로딩중......
            </h1>
          ) : (
            <div className="w-full p-5 my-3 bg-white rounded-xl backdrop-filter backdrop-blur-md bg-opacity-10 border-gray-200 shadow-xl">
              {MovieInfosCtx.moviesInfo?.map((movie, i) => (
                <div
                  className="p-2 my-1 bg-white backdrop-filter backdrop-blur-md bg-opacity-10 border-gray-200 shadow-md animate-fade-left duration-100 hover:bg-slate-200 cursor-pointer"
                  data-key={movie.movieCd}
                  key={movie.movieCd}
                  onClick={clickHandler}
                >
                  <h3 className="mx-10 my-3 lg:text-3xl md:text-2xl sm:text-lg">
                    {i + 1}. {movie.movieNm}
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
