var express = require('express');
var Request = require("request");
var topNews=function(req,res){
    Request.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=1763b1c5253842d197eb64061f12a2c1",function(error,response,body){
            if(error){
                return res.json({message:"No news find",status:400});
            }
            else{
                let data=JSON.parse(response.body);
                return res.json(data);
            }
    });
}

var keyWordNews=function(req,res){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; 
    var yyyy = today.getFullYear();
    var current=yyyy+'-'+mm+'-'+dd;
    var key=req.params.keyword;

    //make request to the API

    Request.get("https://newsapi.org/v2/everything?q="+key+"&from="+current+"&sortBy=popularity&apiKey=1763b1c5253842d197eb64061f12a2c1",function(error,response,body){
        if(error){
            return res.json({message:"No news find",status:400});
        }
        else{
            let data=JSON.parse(response.body);
            return res.json(data);
        }
    })
}

exports.topNews=topNews;
exports.keyWordNews=keyWordNews;