//라우터 미들웨어
var express = require('express');
var router = express.Router();

var main = require('./main/main');
var email = require('./email/email');
var APITest = require('./APITest/API');

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

router.use('/main', main);
router.use('/email', email);
router.use('/APITest', APITest);

router.get('/', (req, res) => {
    var errMsg = req.flash('error');
    res.render('../views/join.ejs', { 'message' : errMsg ? errMsg : '', 'pages' : ['/main']});
});

router.post('/', passport.authenticate('local-join', {
    successRedirect: '/main',
    failureRedirect: '/',
    failureFlash: true
}));

passport.use('local-join', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, function(req, email, password, done) {
    //done 2번째 매개변수 : 성공시 user 정보, 실패시 false -> failureRedirect
    if (Math.random() > 0.5)
        return done(null, false, {message : 'your email is already used'})
    else
        return done(null, { 'email' : email })
}));

passport.serializeUser(function (user, done) {
    //user info save
    done(null, user.email); 
});

passport.deserializeUser(function (email, done) {
    //user info get
    done(null, email)
});

module.exports = router;