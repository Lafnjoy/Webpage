var express = require('express'); 
var bodyParser = require('body-parser'); 
var app = express(); 
var fs = require('fs');
var path = require('path');
var ejs = require('ejs');

app.locals.pretty = true
app.use(express.static('public')); 
app.use(bodyParser.urlencoded({extended : true})); 
app.set('view engine', 'ejs');//ejs 템플릿 엔진  연동 

app.get('/', function (req, res) { 
 
   var data = req.body; 
   res.render('index', {name: data});//views디렉토리안에 있는 index.ejs 파일 
});
/*
app.post('/', function (req, res) { 
   var data = req.body.name; 
   res.render('index', {name: data}); 
});
*/
app.listen(3000, function(){ 
     console.log('App Listening on port 3000'); 
});


//코드수정요망
/*
var dataFolderPath = path.join(__dirname, '/data')
var dataPath = path.join(dataFolderPath, '/data.txt') 

app.get("/", (req, res) => {
  res.redirect('/hello')
})

// 저장된 데이터가 있으면 데이터 출력
app.get("/hello", (req, res) => {
  if(!fs.existsSync(dataFolderPath) || !fs.existsSync(dataPath)) {
    res.render('hello', { title: 'Hello', message: 'Hello World!!!'})
  }
  else {
    fs.readFile(dataPath, 'utf-8', (err, data)=> {
      res.render('data', { title: 'Hello', data: data.split('\n')})
    })
  }
})

// 센서장치에서 데이터를 업데이트하는 API
app.post("/data", (req, res) => {
  var recvData = req.body.data
  // 데이터 저장 폴더 및 데이터 저장 파일 생성
  if(!fs.existsSync(dataFolderPath)) {
    fs.mkdir(dataFolderPath)
  }

  if(!fs.existsSync(dataPath)) {
    fs.appendFile(dataPath, recvData+'\n', (error) => {
      if(error) {
        res.status(500).json({ 'msg': 'Internal server error' });
      }
      else {
        res.status(200).json({ 'msg': 'Data registered successfully' });
      }
    })    
  }
  else {
    fs.readFile(dataPath, 'utf-8', (err, data)=> {
      // 10개 이상 데이터 추가 시 10개만 저장
      var dataArr = data.split('\n')
      if(dataArr.length < 10) {
        fs.appendFile(dataPath, recvData+'\n', (error) => {
          if(error) {
            res.status(500).json({ 'msg': 'Internal server error' });
          }
          else {
            res.status(200).json({ 'msg': 'Data registered successfully' });
          }
        })
      }
      else {
        dataArr.splice(dataArr.length-1, 1)
        dataArr.splice(0,dataArr.length - 9)
        dataArr.push(recvData)
        var file = fs.createWriteStream(dataPath);
        file.on('error', (err) => { if(err) console.log(err) })
        dataArr.forEach((item) => { file.write(item + '\n') })
        file.end();
      }
    })
  }
})
*/