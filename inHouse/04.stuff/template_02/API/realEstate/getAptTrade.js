const getAptTradeAPI = async (AptInfosCtx, pressedLocValue) => {
  const today = new Date();
  let year = today.getFullYear();
  let month = ("0" + (new Date().getMonth())).slice(-2);
  var aptdate = year + month;
  const API_URL =
    "http://openapi.molit.go.kr/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptTradeDev";
  const API_KEY = process.env.EXPO_PUBLIC_PUBLICDATA_API_KEY;
  const headers =
    AptInfosCtx.aptLocData !== undefined
      ? `&pageNo=1&numOfRows=10&LAWD_CD=${
          pressedLocValue ? pressedLocValue : AptInfosCtx.aptLocData
        }&DEAL_YMD=${aptdate}`
      : AptInfosCtx.aptLocData;
  const reqestAPI_URL = `${API_URL}?serviceKey=${API_KEY}${headers}`;
  const response = await fetch(reqestAPI_URL)
    .then((res) => res)
    .catch((error) => {
      console.log(error);
    });
  const xmlString = await response.text();
  const parseString = require("react-native-xml2js").parseString;
  parseString(xmlString, (err, result) => {
    if (err !== null) {
      console.log("ERROR", err);
      return;
    }
    let rawData = JSON.stringify(result);
    let JSONData = JSON.parse(rawData);
    let aptData = JSONData?.response?.body[0].items[0].item;
    AptInfosCtx.setApartmentData(aptData);
    AptInfosCtx.setDataLoaded(true);
  });
};

export default getAptTradeAPI;