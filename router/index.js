//라우터 미들웨어
var express = require('express');
var router = express.Router();

var main = require('./main/main');
var email = require('./email/email');
var APITest = require('./APITest/API');

router.use('/main', main);
router.use('/email', email);
router.use('/APITest', APITest);

router.all('/', (req, res) => {
    res.render('../views/join.ejs', { 'message' : '', 'pages' : ['/main']});
})

module.exports = router;