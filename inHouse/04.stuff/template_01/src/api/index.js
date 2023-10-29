const year = new Date().getFullYear();
const month = ("0" + (new Date().getMonth() + 1)).slice(-2);
const day = ("0" + new Date().getDate()).slice(-2);
const date = parseInt(year + month + day);

const fetchJson = async (url) => {
  const response = await fetch(url);
  return response.json();
};

export const getBoxOfficeInfo = async (MovieInfosCtx) => {
  const url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${
    import.meta.env.VITE_KOBIS_KEY
  }&targetDt=${date - 1}&itemPerPage=5`;
  const json = await fetchJson(url);
  MovieInfosCtx.setMoviesInfo(json?.boxOfficeResult?.dailyBoxOfficeList);
  MovieInfosCtx.setIsLoading(false);
};

export const getSearchMovieInfo = async (MovieInfosCtx, setSearchedMovie) => {
  const url = `http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&ServiceKey=${
    import.meta.env.VITE_KMDB_KEY
  }&query=${MovieInfosCtx.searchMovieKeyword}`;
  const json = await fetchJson(url);

  if (MovieInfosCtx.searchMovieKeyword) {
    if (MovieInfosCtx.searchMovieKeyword.includes("  ")) {
      MovieInfosCtx.setBoxesMoviesInfo(json.Data[0].Result);
      setSearchedMovie(undefined);
    } else {
      setSearchedMovie(json.Data[0].Result);
    }
  }
  MovieInfosCtx.setIsLoading(false);
};

export const getSearchGenreMovies = async (
  setCuratedMovie,
  MovieInfosCtx,
  genres
) => {
  const url = `http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&ServiceKey=${
    import.meta.env.VITE_KMDB_KEY
  }&genre=${genres}&releaseDts="20100101`;
  const json = await fetchJson(url);
  setCuratedMovie(json.Data[0].Result);
  MovieInfosCtx.setIsLoading(false);
};

export const getUpComingMovies = async (setUpcomings, MovieInfosCtx) => {
  const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${
    import.meta.env.VITE_TMDB_KEY
  }&language=ko-KR&region=KR&page=1`;
  const json = await fetchJson(url);
  setUpcomings(json.results);
  MovieInfosCtx.setIsLoading(false);
};
