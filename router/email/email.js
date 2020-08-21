var express = require('express');
var router = express.Router();
var path = require('path');

//npm i ejs //ejs는 템플릿 엔진임. express와 결합 가능한 모듈.
router.route('/')
.get((req, res) => { //req.param('param1')
    res.sendFile(path.join(__dirname, "../../public/main.html"));  // ../  < 상대경로 사용시 path.join 필요
})
.post((req, res) => {
    res.render('email.ejs', {'email' : req.body.email});
});

module.exports = router;