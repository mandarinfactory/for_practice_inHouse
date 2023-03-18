const express = require('express');
const app = express();

app.listen(8080, function () {
    console.log('listening on 8080');
});
// server를 띄우기 위한 기본 셋팅!(설치한 express 라이브러리 사용방법)

app.get('/pet', function(req, res) {
    res.send('방굽! 여기는 PET 용품을 쇼핑할 수 있는 페이지입니다.')
});
app.get('/beauty', function(req, res) {
    res.send('방굽! 여기는 BEAUTY 용품을 쇼핑할 수 있는 페이지입니다.')
})
//app.get(GET요청-->읽기요청)을 하면 주소창에 URL을 입력해서 server에 GET요청을 할 수 있다.
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
})