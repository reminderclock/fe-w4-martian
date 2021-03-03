// 클래스의 객체처럼
var express = require('express')
// express 라는 함수를 호출
var app = express()
// localhost 3000 포트기반으로 실행
app.listen(3000, function() {
	console.log("start! express server on port 3000");
});
// 위 콘솔보다 먼저 쓰여짐
// 비동기 먼저 실행
// console.log('end of server code...') 
app.use(express.static('public'));
app.get('/', function(req,res) {
    res.sendFile(__dirname + "/public/index.html")
});

