const express = require('express');
const app = express();
const bodyParser = require('body-parser')
app.use(express.urlencoded({extended: true})) 

const MongoClient = require('mongodb').MongoClient;

app.listen(8080, () => {
    console.log('listening on 8080');
});
// server를 띄우기 위한 기본 셋팅!(설치한 express 라이브러리 사용방법)

app.get('/pet',(req, res) => {
    res.send('방굽! 여기는 PET 용품을 쇼핑할 수 있는 페이지입니다.')
});
app.get('/beauty',(req, res) => {
    res.send('방굽! 여기는 BEAUTY 용품을 쇼핑할 수 있는 페이지입니다.')
});
//app.get(GET요청-->읽기요청)을 하면 주소창에 URL을 입력해서 server에 GET요청을 할 수 있다.
app.get('/',(req, res) => {
    res.sendFile(__dirname + '/index.html');
});
app.get('/write',(req, res) => {
    res.sendFile(__dirname + '/write.html');
});

app.post('/add', (req, res) => {
    res.send('good!')
    console.log(req.body.title);
    console.log(req.body.date);
});