const getCommercialInfosHandler = async (
  MapInfosCtx,
  largeClass,
  middleClass,
  smallClass
  // 메뉴를 클릭하면 해당 분류class를 state에 값으로 넣어서 API에 데이터를 넣었습니다.
) => {
  const fetchJson = async (url) => {
    const response = await fetch(url);
    return response.json();
  };
  const url =
    "https://apis.data.go.kr/B553077/api/open/sdsc2/storeListInRectangle";
    // 네이버 지도 창을 기준으로 상점을 찾을수 있는 API를 불러왔습니다.
  const API_KEY = import.meta.env.VITE_COMMERCIAL_API_KEY;
  const headers = {
    lat: MapInfosCtx.isLocation ? MapInfosCtx.isLocation.lat : undefined, // 경도
    lng: MapInfosCtx.isLocation ? MapInfosCtx.isLocation.lng : undefined, // 위도
    largeClass, // 상가 대분류
    middleClass, // 상가 중분류
    smallClass, // 상가 소분류 --> 각각 headers에 추가해서 원하는 결과값이 나오도록 했습니다.
  };
  const URL_HEADERS = `&pageNo=1&numOfRows=20&minx=${MapInfosCtx.bounds.min.x}&miny=${MapInfosCtx.bounds.min.y}&maxx=${MapInfosCtx.bounds.max.x}&maxy=${MapInfosCtx.bounds.max.y}&indsLclsCd=${headers.largeClass}&indsMclsCd=${headers.middleClass}&indsSclsCd=${headers.smallClass}&type=json`;
  const API_URL = `${url}?serviceKey=${API_KEY}${URL_HEADERS}`;
  const json = await fetchJson(API_URL);
  MapInfosCtx.setComData(json);
};

export default getCommercialInfosHandler;
