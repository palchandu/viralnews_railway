var express=require('express');
var app=express();
var bodyParser = require('body-parser');
var http = require('http');
var cors=require('cors');
//===============================================ALL REQUIRE====================================//
//-----------------------------------------------Router-----------------------------------------//
var news=require('./routes/news');
var railway=require('./routes/railway');
//===============================================ALL APP USE====================================//


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser({limit :"50mb"}));
app.use(cors());
app.use('/news',news);
app.use('/railway',railway);


var PORT = '9002';
var server = http.createServer(app);
server.listen(PORT);
server.on('error',function(err){
    console.log('server errorr',err);
})
server.on('listening',function(){
    console.log('running on port no:::',PORT);
})
module.exports = app;