const SERVICE_KEY = process.env.REACT_APP_API_KEY;
const urls = 'http://openapi.molit.go.kr/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptTradeDev?LAWD_CD=11110&DEAL_YMD=201512&serviceKey=24vbFaV5oWpSo3qOGdwCXPO%2FX5gr4tqD2gxEwUJWb2xVcv4sWZ5QmmZruySMYWl2471GK88wVe3zjfacPH%2FENQ%3D%3D';

axios.get(urls)
.then(
    res => {
        const apartment = res.data.response.body.items.items
        console.log(url);
        
    }
)