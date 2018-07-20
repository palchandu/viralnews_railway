var express=require('express');
var router=express.Router();
var news=require('../controller/newsController');
router.get('/',news.topNews);
router.get('/cat/:keyword',news.keyWordNews);



module.exports=router;