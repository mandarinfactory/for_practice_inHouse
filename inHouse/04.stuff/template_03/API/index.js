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
  const API_KEY = import.meta.env.VITE_COMMERCIAL_API_KEY;
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

export default getCommercialInfosHandler;
