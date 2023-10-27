import proj4 from "proj4";

const getFilteredGeoLocation = async (value, { setState }) => {
  const API_URL = "https://business.juso.go.kr/addrlink/addrCoordApi.do";
  const API_KEY = process.env.EXPO_PUBLIC_GEOLOCATION_API_KEY;
  const headers = `
  &admCd=${value.법정동시군구코드}${value.법정동읍면동코드}
  &rnMgtSn=${value.법정동시군구코드}${value.도로명코드}
  &udrtYn=${value.도로명지상지하코드}
  &buldMnnm=${value.도로명건물본번호코드}
  &buldSlno=${value.도로명건물부번호코드}
  &resultType=json
  `;
  const reqestAPI_URL = `${API_URL}?confmKey=${API_KEY}${headers}`;
  const json = await (await fetch(reqestAPI_URL)).json();
  const coordX = parseInt(json?.results?.juso[0]?.entX);
  const coordY = parseInt(json?.results?.juso[0]?.entY);
  let point = [coordX, coordY];

  proj4.defs["EPSG:5179"] =
    "+proj=tmerc +lat_0=38 +lon_0=127.5 +k=0.9996 +x_0=1000000 +y_0=2000000 +ellps=GRS80 +units=m +no_defs"; //제공되는 좌표

  let grs80 = proj4.Proj(proj4.defs["EPSG:5179"]);
  let wgs84 = proj4.Proj(proj4.defs["EPSG:4326"]); // 위경도

  let p = proj4.toPoint(point);
  p = proj4.transform(grs80, wgs84, p);

  setState([p.y, p.x]);
};

export default getFilteredGeoLocation;
