const getCommercialInfosHandler = async (
  MapInfosCtx,
  largeClass,
  middleClass,
  smallClass
) => {
  const fetchJson = async (url) => {
    const response = await fetch(url);
    return response.json();
  };
  const url =
    "https://apis.data.go.kr/B553077/api/open/sdsc2/storeListInRectangle";
  const API_KEY =
    "24vbFaV5oWpSo3qOGdwCXPO%2FX5gr4tqD2gxEwUJWb2xVcv4sWZ5QmmZruySMYWl2471GK88wVe3zjfacPH%2FENQ%3D%3D";
  const headers = {
    lat: MapInfosCtx.isLocation ? MapInfosCtx.isLocation.lat : undefined,
    lng: MapInfosCtx.isLocation ? MapInfosCtx.isLocation.lng : undefined,
    largeClass,
    middleClass,
    smallClass,
  };
  const URL_HEADERS = `&pageNo=1&numOfRows=20&minx=${MapInfosCtx.bounds.min.x}&miny=${MapInfosCtx.bounds.min.y}&maxx=${MapInfosCtx.bounds.max.x}&maxy=${MapInfosCtx.bounds.max.y}&indsLclsCd=${headers.largeClass}&indsMclsCd=${headers.middleClass}&indsSclsCd=${headers.smallClass}&type=json`;
  const API_URL = `${url}?serviceKey=${API_KEY}${URL_HEADERS}`;
  const json = await fetchJson(API_URL);
  MapInfosCtx.setComData(json);
};

const getSearchPlaceLocation = async () => {
  const options = {
    protocol: "https:",
    hostname: "openapi.naver.com",
    path: "/v1/search/local.json?query=부천&display=5",
    headers: {
      "X-Naver-Client-Id": "G3kN_B5HTbOgWOsnz14I",
      "X-Naver-Client-Secret": "aVlu4IdAoB",
    },
  };

  const resultObj = await new Promise((res, reject) => {
    https.get(options, (response) => {
      var result = "";
      response.on("data", function (chunk) {
        result += chunk;
      });

      response.on("end", function () {
        const body = {
          headers: {
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
          },
          statusCode: 200,
          body: JSON.stringify(result),
        };
        res(body);
      });
    });
  });
  console.log(body);
  return resultObj;
};

export {getCommercialInfosHandler};
