const getFilteredGeoLocation = async (pressedAptData) => {
  const API_URL = "https://business.juso.go.kr/addrlink/addrCoordApi.do";
  const API_KEY = "U01TX0FVVEgyMDIzMDkxNzIyMzk1MDExNDEwOTg=";
  const headers = `
  &admCd=${pressedAptData.법정동시군구코드}${pressedAptData.법정동읍면동코드}
  &rnMgtSn=${pressedAptData.법정동시군구코드}${pressedAptData.도로명코드}
  &udrtYn=${pressedAptData.도로명지상지하코드}
  &buldMnnm=${pressedAptData.도로명건물본번호코드}
  &buldSlno=${pressedAptData.도로명건물부번호코드}
  &resultType=json
  `;
  const reqestAPI_URL = `${API_URL}?confmKey=${API_KEY}${headers}`;
  const json = await (await fetch(reqestAPI_URL)).json();
};

export default getFilteredGeoLocation;
