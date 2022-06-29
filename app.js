var express = require('express');
var session = require("express-session");
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var path = require('path');

var expressLayouts = require('express-ejs-layouts');

var routers = require('./routes/route.js')

var app = express();

app.set('views',path.join(__dirname, 'views'));
app.set('view engine' , 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(cookieParser());
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret :"node-session",
    resave:false,
    saveUninitialized:true
}));
app.use(expressLayouts);

app.use('/' , routers);

module.exports = app;

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`express 실행! 포트번호 : ${port}`);
});


