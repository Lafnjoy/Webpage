var express = require('express'); 
var bodyParser = require('body-parser'); 
var app = express(); 
var fs = require('fs');
var path = require('path');
var ejs = require('ejs');
var request = require('request');
var baseRouter = require('./routes/route');

app.locals.pretty = true
app.use(express.static('public')); 
app.use(express.static('node_modules'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/',baseRouter);

app.set('view engine', 'ejs');//ejs 템플릿 엔진  연동 

app.listen(80, function(){ 
     console.log('App Listening on port 80'); 
});
