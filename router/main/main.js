var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', (req, res) => { //req.param('param1')
    //res.sendFile(path.join(__dirname, "../../public/main.html"));  // ../  < 상대경로 사용시 path.join 필요    
    res.render('email.ejs', { 'email': req.user });
});

module.exports = router;