var express = require('express');
var Request = require("request");
var apikey="3lg4t96auw";
var async = require('async');
var train = ( req, res) => {
    // console.log("inside the train api",req);
        var train_name = req.body.trainName;
        Request.get("https://api.railwayapi.com/v2/suggest-train/train/"+train_name+"/apikey/"+apikey,function(error,response,body){
            if(error){
                return res.json({message:"Train list not fooun",status:400});
            }
            else{
                if(response.statusCode ===200){
                    let data = JSON.parse(response.body);
                    let nameAndNumber = [];
                    async.waterfall([
                        function(callback){
                            console.log('no of trains::',data.trains.length);
                            for(var i=0; i< data.trains.length ; i++){
                                nameAndNumber.push(data.trains[i].name +" "+ data.trains[i].number);
                                console.log('no of trains::',data.trains[i].name);
                            }
                            callback(null, nameAndNumber);
                        }],
                        function(err, result){
                            return res.json({status : 200, message :"Trains", data : result});
                        }
                    )
                }else{
                    return res.json({status : 400, message :"No train avaiable", data : []});
                }
                
            }
        })
}


exports.train = train;