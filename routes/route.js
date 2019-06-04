var express = require('express');
var request = require('request')
var bodyParser = require('body-parser');
var jsonfile = require('jsonfile');
var sensorD;

request.get('http://175.195.56.132:3000/sensordata',function(err,res,body){
    sensorD = res.body;
   
});

var router = express.Router();
router.get('/',function(req,res,next){
    var data = req.body; 
    
request.get('http://175.195.56.132:3000/sensordata',function(err,res,body){
    sensorD = res.body;
});

res.render('index', {data: sensorD});
});
module.exports = router;

