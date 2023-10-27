const filteredNewspaperAPI = async () => {
  const API_URL = "https://openapi.naver.com/v1/search/news.json";
  const API_ID = "G3kN_B5HTbOgWOsnz14I";
  const API_KEY = "aVlu4IdAoB";
  const headers = "&query=부동산&display=5&start=1&sort=sim";
  const reqestAPI_URL = `${API_URL}?X-Naver-Client-Id=${API_ID}&X-Naver-Client-Secret=${API_KEY}${headers}`;
  const json = await (await fetch(reqestAPI_URL)).json();
  console.log(json);
};

export default filteredNewspaperAPI;