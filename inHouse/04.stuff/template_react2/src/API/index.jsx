export const getMovieInfo = async () => {
  const movieHeaders = new Headers();
  movieHeaders.append("key", "03d2542e7c0e7e77045f52c5567f0546");
  movieHeaders.append("targetDt", "20230626");
  movieHeaders.append("itemPerPage", "5");

  const requestOptions = {
    method: "GET",
    headers: movieHeaders,
    redirect: "follow",
  };

  fetch(
    "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json",
    requestOptions
  )
    .then((response) => response.boxOfficeResult)
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};
