var xhr = new XMLHttpRequest();
var url = 'http://openapi.molit.go.kr/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptTradeDev'; /*URL*/
var queryParams = '?' + encodeURIComponent('serviceKey') + '='+'24vbFaV5oWpSo3qOGdwCXPO%2FX5gr4tqD2gxEwUJWb2xVcv4sWZ5QmmZruySMYWl2471GK88wVe3zjfacPH%2FENQ%3D%3D'; /*Service Key*/
queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /**/
queryParams += '&' + encodeURIComponent('LAWD_CD') + '=' + encodeURIComponent('28237'); /**/
queryParams += '&' + encodeURIComponent('DEAL_YMD') + '=' + encodeURIComponent('202301'); /**/
xhr.open('GET', url + queryParams);
console.log('GET', url + queryParams);
xhr.onreadystatechange = function () {
    console.log(this);
    console.log(this.readyState);
    console.log(this.status);
    console.log(this.responseText);
    if (this.readyState == 4) {
        alert('Status: '+this.status+'nHeaders: '+JSON.stringify(this.getAllResponseHeaders())+'nBody: '+this.responseText);
    }
};
xhr.send('');