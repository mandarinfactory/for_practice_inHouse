import Layout from "./Components/Layout";

function App() {
  const SERVICE_KEY =
    "24vbFaV5oWpSo3qOGdwCXPO%2FX5gr4tqD2gxEwUJWb2xVcv4sWZ5QmmZruySMYWl2471GK88wVe3zjfacPH%2FENQ%3D%3D";
  const Location = "11110";
  const Date = "202302";
  const getApartmentInfos = async () => {
    const json = await (
      await fetch(
        `http://openapi.molit.go.kr/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptTradeDev?serviceKey=${SERVICE_KEY}&pageNo=1&numOfRows=10&LAWD_CD=${Location}&DEAL_YMD=${Date}`
      )
    );
    console.log(json);
  };
  getApartmentInfos();
  return (
    <>
      <Layout></Layout>
    </>
  );
}

export default App;
