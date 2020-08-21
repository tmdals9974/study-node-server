var express = require('express');
var router = express.Router();
var request = require('request');

router.post('/', (req, res) => {
    console.log(req.body);

    request.post({
        url: 'https://ssl-new.bankda.com/partnership/user/user_join_prs.php',
        json : true,
        body : req.body,
        //headers: { 'Content-Type': 'application/json' }, //json : true가 자동으로 처리해줌
    }, function (error, response, body) {
        console.log(`body:${body}`);
        res.send(body);
    });
})

router.post('/1', (req,res) => {
    console.log(req.body);
    res.send('OK');
})

module.exports = router;