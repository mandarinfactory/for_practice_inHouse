// 네이버 검색 API 예제 - 블로그 검색
var express = require('express');
var app = express();
app.get('/search/local', function (req, res) {
  var client_id = '97gi3wHYe0SVzbmFuIJW';
  var client_secret = 'Q8IvuVzzbm';
   var api_url = 'https://openapi.naver.com/v1/search/local?query=' + encodeURI(req.query.query); // JSON 결과
   var request = require('request');
   var options = {
       url: api_url,
       headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}
    };
   request.get(options, function (error, response, body) {
     if (!error && response.statusCode == 200) {
       res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
       res.end(body);
     } else {
       res.status(response.statusCode).end();
       console.log('error = ' + response.statusCode);
     }
   });
 });
 app.listen(3000, function () {
   console.log('listening on port 3000!');
 });