const getWeatherDataAPI = async (AptInfosCtx) => {
  const today = new Date();

  let year = today.getFullYear();
  let month = ("0" + (new Date().getMonth() + 1)).slice(-2);
  let day = ("0" + new Date().getDate()).slice(-2);
  let date = `${year}${month}${day}`;

  let hours = today.getHours();
  if (parseInt(hours) < 10) {
    hours = `0${hours}00`;
  } else hours = `${hours}00`;

  const API_URL =
    "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst";
  const API_KEY = process.env.EXPO_PUBLIC_PUBLICDATA_API_KEY;
  const headers =
    AptInfosCtx.weatherLocData !== undefined
      ? `&pageNo=1&numOfRows=10&dataType=JSON&base_date=${date}&base_time=${
          hours - 100
        }&nx=${AptInfosCtx.weatherLocData.x}&ny=${AptInfosCtx.weatherLocData.y}`
      : AptInfosCtx.weatherLocData;
  const reqestAPI_URL = `${API_URL}?serviceKey=${API_KEY}${headers}`;
  const json = await (await fetch(reqestAPI_URL)).json();
  const rawWeatherData = json?.response?.body?.items?.item;
  AptInfosCtx.setWeatherData(rawWeatherData);
};

export default getWeatherDataAPI;
