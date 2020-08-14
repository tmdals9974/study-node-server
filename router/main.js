var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', (req, res) => { //req.param('param1')
    //res.send("hello world!"); //send는 한번밖에안됨. return정도로 생각하면 될 듯.
    res.sendFile(path.join(__dirname, "../public/main.html"));
});

module.exports = router;