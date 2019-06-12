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

var R1 = JSON.parse(sensorD);

var R1Temp=R1.Temperature
var R1Hum=R1.Humidity
var R1Pir =R1.PIR
var R1Sound = R1.Sound
var R1Light = R1.Light


res.render('index', {R1T : R1Temp,R1H : R1Hum,R1P : R1Pir,R1S : R1Sound,R1L : R1Light});

});


module.exports = router;