var express = require('express');
var app = express();
var router = require('./router/index');
var bodyParser = require('body-parser');
var passport = require('passport'); 
var session = require('express-session');
var flash = require('connect-flash'); 

//포트 지정 오픈 
app.listen(3000, () => {
    console.log("start express server on port 3000!!");
})

app.set('view engine', 'ejs'); //'view engine'키 'ejs'값

//상위라우터에서 use 처리 하지않은 변수들에 대해서는 하위라우터에서 다시한번 선언해야함
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true})); //json형태일 경우 bodyParser.json()
app.use(express.static(__dirname + '/public'));  //app.use('/static', express.static(__dirname + '/public')); //가상접두부를 통해 마운트 가능 (/static/main.js)

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

//순서에 영향있음..
app.use(router);
