var express = require('express');
var request = require('request')
var bodyParser = require('body-parser');
var jsonfile = require('jsonfile');


var router = express.Router();
router.get('/',function(req,res,next){
    var data = req.body; 
    res.render('index', {name: data});

request.get('http://175.195.56.132:3000/sensordata',function(err,res,body){
    jsonfile.writeFile('sensordata', res.body);
});
});
module.exports = router;
