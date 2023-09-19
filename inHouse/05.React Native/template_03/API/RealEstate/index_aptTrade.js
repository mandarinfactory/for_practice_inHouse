const getAptTradeAPI = async () => {
  const API_URL =
    "http://openapi.molit.go.kr/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptTradeDev";
  const API_KEY =
    "24vbFaV5oWpSo3qOGdwCXPO%2FX5gr4tqD2gxEwUJWb2xVcv4sWZ5QmmZruySMYWl2471GK88wVe3zjfacPH%2FENQ%3D%3D";
  const headers = "&pageNo=1&numOfRows=10&LAWD_CD=11140&DEAL_YMD=202308";
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
    let aptData = JSONData.response.body[0].items[0].item;
  });
};

export default getAptTradeAPI;