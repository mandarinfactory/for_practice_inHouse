const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(express.urlencoded({extended: true}));
const MongoClient = require('mongodb').MongoClient;
app.set('view engine', 'ejs');

MongoClient.connect('mongodb+srv://mandarinfactory:tiger6475!@mandarinfactory.ldgnukl.mongodb.net/?retryWrites=true&w=majority', (error, client) => {
    if(error) return console.log('ERROR!')
    db = client.db('template');
    // user가 form에서 /add로 POST요청(쓰기요청)하면
    app.post('/add', (req, res) => {
        res.send('good!')
        // mongoDB.counter내의 총게시물갯수를 찾음
        db.collection('counter').findOne({ name : 'postNumber' }, (err, res) => {
            let totalPostNum = res.totalPost; // 총게시물갯수를 변수에 저장
            // 이제 DB.post에 새게시물을 기록함
            db.collection('post').insertOne({ _id : totalPostNum + 1, title : req.body.title, date : req.body.date }, () => {
                console.log('COMPLETE!');
                // counter라는 collection에 잇는 totalPost라는 항목도 1 증가시켜야함! --> 얘도 이 안에다가!
                db.collection('counter').updateOne({ name : 'postNumber' }, { $inc : { totalPost : 1 } }, (err, res) => {
                    if(err) return console.log(err);
                });
            });
        });
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

app.delete('/delete', function(req, res) {
    console.log(req.body);
    req.body._id = parseInt(req.body._id)
    //req.body에 담겨온 게시물번호를 가진 글을 db에서 찾아서 삭제하기
    db.collection('post').deleteOne(req.body, (err, result) => {
        console.log('완료!');
        res.status(400).send({ message : 'FAIL!' });
    });
});
