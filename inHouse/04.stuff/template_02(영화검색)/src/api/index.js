const KOBIS_KEY = "03d2542e7c0e7e77045f52c5567f0546";
const KMDB_KEY = "Y9097046I5G4HIUSN831";
const TMDB_KEY = "deec042ed38d5c0d68aaeedf6f2a9ae3";

const year = new Date().getFullYear();
const month = ("0" + (new Date().getMonth() + 1)).slice(-2);
const day = ("0" + new Date().getDate()).slice(-2);
const date = parseInt(year + month + day);

const fetchJson = async (url) => {
  const response = await fetch(url);
  return response.json();
};

export const getBoxOfficeInfo = async (MovieInfosCtx) => {
  const url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${KOBIS_KEY}&targetDt=${
    date - 1
  }&itemPerPage=5`;
  const json = await fetchJson(url);
  MovieInfosCtx.setMoviesInfo(json?.boxOfficeResult?.dailyBoxOfficeList);
  MovieInfosCtx.setIsLoading(false);
  console.log(json);
};

export const getSearchMovieInfo = async (MovieInfosCtx, setSearchedMovie) => {
  const url = `http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&ServiceKey=${KMDB_KEY}&query=${MovieInfosCtx.searchMovieKeyword}`;
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
  const url = `http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&ServiceKey=${KMDB_KEY}&genre=${genres}&releaseDts="20100101`;
  const json = await fetchJson(url);
  setCuratedMovie(json.Data[0].Result);
  MovieInfosCtx.setIsLoading(false);
};

export const getUpComingMovies = async (setUpcomings, MovieInfosCtx) => {
  const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${TMDB_KEY}&language=ko-KR&region=KR`;
  const json = await fetchJson(url);
  setUpcomings(json.results);
  MovieInfosCtx.setIsLoading(false);
};
