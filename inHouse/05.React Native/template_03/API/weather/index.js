const getWeatherDataAPI = async () => {
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
  const API_KEY =
    "24vbFaV5oWpSo3qOGdwCXPO%2FX5gr4tqD2gxEwUJWb2xVcv4sWZ5QmmZruySMYWl2471GK88wVe3zjfacPH%2FENQ%3D%3D";
  const headers = `&pageNo=1&numOfRows=10&dataType=JSON&base_date=${date}&base_time=${hours}&nx=60&ny=127`;
  const reqestAPI_URL = `${API_URL}?serviceKey=${API_KEY}${headers}`;
  const json = await (await fetch(reqestAPI_URL)).json();
  const weatherData = json.response.body.items.item
};

export default getWeatherDataAPI;
