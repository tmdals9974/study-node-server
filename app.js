var express = require('express');
var app = express();
var routerMain = require('./router/main.js');
//포트 지정 오픈
app.listen(3000, () => {
    console.log("start express server on port 3000!!");
})

//public 경로에 있는 파일들을 전부 static으로 등록하여, 컨트롤러에서 url 매핑을 하지 않아도 접근할 수 있도록 허용.
app.use(express.static(__dirname + '/public')); 
//app.use('/static', express.static(__dirname + '/public')); //가상접두부를 통해 마운트 가능 (/static/main.js)

console.log('비동기!!');

//npm i express // => npm install express --save--prod와 동일
// npm i nodemon -g  // 핫로드 지원해주는 모듈
// !! npm i nodemon으로 설치할 경우 전역으로 설치가 되지 않아서 nodemon app.js에서 'nodemon'이라는 전역변수를 사용하지못함.

//node app.js
//nodemon app.js

// /main 으로 들어온 요청에 대해서는 routerMain 라우터에서 처리함.
app.use('/main', routerMain)

//npm i body-parser //express에서는 post bodydata를 해석하지 못함. body-parser라는 모듈이 추가적으로 필요함. 
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true})); //json형태일 경우 bodyParser.json()
app.use(bodyParser.json());
// app.post('/email_post', (req, res) => {
//     res.send("post response | email : " + req.body.email);
// })

//npm i ejs //ejs는 템플릿 엔진임. express와 결합 가능한 모듈.
app.set('view engine', 'ejs'); //'view engine'키 'ejs'값
app.post('/email_post', (req, res) => {
    res.render('email.ejs', {'email' : req.body.email});
});






// var request = require('request');

// app.post('/APITest', (req, res) => {
//     console.log(req.body);

//     request.post({
//         url: 'http://localhost:3000/APITest/1',
//         json : true,
//         body : { Name : 'John Smith', Age: 23},
//         //headers: { 'Content-Type': 'application/json' }, //json : true가 자동으로 처리해줌
//     }, function (error, response, body) {
//         console.log(`body:${body}`);
//         res.send(body);
//     });
// })

// app.post('/APITest/1', (req,res) => {
//     console.log(req.body);
//     res.send('OK');
// })