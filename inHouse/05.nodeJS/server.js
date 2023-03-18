const express = require('express');
const app = express();
const bodyParser = require('body-parser')
app.use(express.urlencoded({extended: true})) 

const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb+srv://mandarinfactory:tiger6475!@mandarinfactory.ldgnukl.mongodb.net/?retryWrites=true&w=majority', (error, client) => {
    if(error) return console.log('ERROR!')
    db = client.db('template');

   /* db.collection('post').insertOne({ 이름 : 'Brent', 나이 : 29 }, (error, result) => {
        console.log('COMPELTE!');
    }); 
    app.post('/add', (req, res) => {
    res.send('good!')
    console.log(req.body.title);
    console.log(req.body.date);
});
    */
    app.post('/add', (req, res) => {
        res.send('good!')
        db.collection('post').insertOne({ title : req.body.title, date : req.body.date })
    });

    app.listen(8080, () => {
        console.log('listening on 8080');
    });
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

// /add 경로로 post 요청을 하면, data 2개(날짜, 제목)를 보내주는데 --> post라는 이름을 가진 collection에 두개 data를 저장하기!