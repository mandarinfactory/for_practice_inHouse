const getFilteredGeoLocation = async () => {
    const API_URL = "https://business.juso.go.kr/addrlink/addrCoordApi.do";
    const API_KEY = "U01TX0FVVEgyMDIzMDkxNzIyMzk1MDExNDEwOTg="
    const headers = `&admCd=2823710100&rnMgtSn=282373000066&udrtYn=0&buldMnnm=246&buldSlno=0&resultType=json`
    const reqestAPI_URL = `${API_URL}?confmKey=${API_KEY}${headers}`;
    const json = await (await fetch(reqestAPI_URL)).json();
    console.log(json.results.juso);
}

export default getFilteredGeoLocation;