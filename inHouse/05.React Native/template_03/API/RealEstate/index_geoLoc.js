

const getFilteredGeoLocation = async (value, aptObj) => {
  const API_URL = "https://business.juso.go.kr/addrlink/addrCoordApi.do";
  const API_KEY = "U01TX0FVVEgyMDIzMDkxNzIyMzk1MDExNDEwOTg=";
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
  const coordX = json.results.juso[0].entX;
  const coordY = json.results.juso[0].entY;
};

export default getFilteredGeoLocation;
