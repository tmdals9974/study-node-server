var express = require('express');
var app = express();
var router = require('./router/index');
var bodyParser = require('body-parser');


//포트 지정 오픈 
app.listen(3000, () => {
    console.log("start express server on port 3000!!");
})

app.set('view engine', 'ejs'); //'view engine'키 'ejs'값

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true})); //json형태일 경우 bodyParser.json()
app.use(express.static(__dirname + '/public'));  //app.use('/static', express.static(__dirname + '/public')); //가상접두부를 통해 마운트 가능 (/static/main.js)
app.use(router);

