const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(express.urlencoded({extended: true}));
const MongoClient = require('mongodb').MongoClient;
app.set('view engine', 'ejs');

MongoClient.connect('mongodb+srv://mandarinfactory:tiger6475!@mandarinfactory.ldgnukl.mongodb.net/?retryWrites=true&w=majority', (error, client) => {
    if(error) return console.log('ERROR!')
    db = client.db('template');
    app.post('/add', (req, res) => {
        res.send('good!')
        db.collection('post').insertOne({ title : req.body.title, date : req.body.date }, () => {
            console.log('COMPLETE!');
        })
    });
    app.listen(8080, () => {
        console.log('listening on 8080');
    }); // server를 띄우기 위한 기본 셋팅!(설치한 express 라이브러리 사용방법)
});

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

app.get('/list',(req, res) => {
    db.collection('post').find().toArray((error, result) => {
        console.log(result);
        res.render('list.ejs', { posts : result });
    });
});
