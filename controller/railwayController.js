var express = require('express');
var Request = require("request");
var async = require('async');
var service = require('../service');
var train = function ( req, res) {
    // console.log("inside the train api",req);
        var train_name = req.params.train_name;
        let trainsPromise=service.getAllTrains(train_name);
        trainsPromise.then(function(result){
            let data = result;
            let nameAndNumber = [];
            for(let i=0;i<data.trains.length;i++)
            {
                nameAndNumber.push(data.trains[i].name +" "+ data.trains[i].number);
            }
            return res.json({status : 200, message :"Trains", data : nameAndNumber});
        },function(error){
            return res.json({status : 400, message :"No train avaiable", data : []});
        });
};

let stations=function(req,res){
    let station_name=req.body.stn;
    let stationPromise = service.getAllStationsName(station_name);
    stationPromise.then(function(result){
        stationDetails = result;
        let nameAndCode = [];
        for(let i=0;i<stationDetails.stations.length;i++)
        {
            nameAndCode.push(stationDetails.stations[i].name +" "+ stationDetails.stations[i].code);
        }
        return res.json({status : 200, message :"Trains", data : nameAndCode});
    },function(error){
        return res.json({message:"No Result Found.",status:400});
    }) 
}

let liveTrainStatus=function(req,res){
    let train_number=req.body.train_num;
    let date=req.body.start_date;
    let liveStatusPromise=service.getLiveStatus(train_number,date);
    liveStatusPromise.then(function(result){
        liveDetails=result.route;
        return res.json({status : 200, message :"Trains", data : liveDetails});
    },
    function(error){
        return res.json({message:"No Result Found.",status:400,data:error});
    })
}

let pnrStatus=function(req,res){
    let pnr=req.body.pnr_number;
    let pnrStatusPromise=service.getPnrStatus(pnr);
    pnrStatusPromise.then(function(result,error){
        if(error)
        {
            return res.json({message:"No Result Found.",status:400,data:error});
        }
        else{
            return res.json({status : 200, message :"Trains", data : result});
        }
    });
}

let trainRoutes=function(req,res){
let train_number=req.body.train_num;
let trainRoutesPromise=service.getTrainRoutes(train_number);
trainRoutesPromise.then(function(result,error){
    if(error){
        return res.json({message:"No Result Found.",status:400,data:error});
    }
    else{
        return res.json({status : 200, message :"Trains", data : result});
    }
});
}

let seatAvailability=function(req,res){
    let train_number=req.body.train_num;
    let source=req.body.source;
    let dest=req.body.dest;
    let journy_date=req.body.date;
    let prefrence=req.body.pref;
    let quota=req.body.quota;
    let setAvailPromise=service.getSeatAvailability(train_number,source,dest,journy_date,prefrence,quota);
    setAvailPromise.then(function(result,error){
        if(error)
        {
            return res.json({message:"No Result Found.",status:400,data:error});
        }
        else{
            return res.json({status : 200, message :"Trains", data : result});
        }
    });
}

let trainBetweenStation=function(req,res){
    let source=req.body.source;
    let dest=req.body.dest;
    let date=req.body.date;
    let trnBetweenStn=service.gettrainBtnStation(source,dest,date);
    trnBetweenStn.then(function(result,error){
        if(error)
        {
            return res.json({message:"No Result Found.",status:400,data:error});
        }
        else{
            return res.json({status : 200, message :"Trains", data : result});
        }
    });
}

let trainNameNumber=function(req,res){
    let name_num=req.body.name_num;
    let trnNameNum=service.gettrainNameNumber(name_num);
    trnNameNum.then(function(result,error){
        if(error)
        {
            return res.json({message:"No Result Found.",status:400,data:error});
        }
        else{
            return res.json({status : 200, message :"Trains", data : result});
        }
    });
}


let fareEnquiry=function(req,res){
    let train=req.body.train;
    let source=req.body.source;
    let dest=req.body.dest;
    let age=req.body.age;
    let pref=req.body.pref;
    let quota=req.body.quota;
    let date=req.body.date;
    let fareEnquiry=service.getFare(train,source,dest,age,pref,quota,date);
    fareEnquiry.then(function(result,error){
        if(error){
            return res.json({message:"No result Found.",status:400,data:error});
        }
        else{
            return res.json({status : 200, message :"Trains", data : result});
        }
    });
}


let trainArrival=function(req,res){

    let station_code=req.body.station_code;
    let trainArriv=service.traiArrival(station_code);
    trainArriv.then(function(result,error){
        if(error){
            return res.json({message:"No trains Found.",status:400,data:error});
        }
        else{
            return res.json({status : 200, message :"Trains", data : result});
        }
    });
}

let canceledTrain=function(req,res){
    let date=req.body.date;
    let trainCanc=service.trainCancel(date);
    trainCanc.then(function(result,error){
        if(error){
            return res.json({message:"No result Found.",status:400,data:error});
        }
        else{
            return res.json({status : 200, message :"Trains", data : result});
        }
    });
}

let reScheduledTrain=function(req,res){
    let date=req.body.date;
    let trainReSch=service.trainCancel(date);
    trainReSch.then(function(result,error){
        if(error){
            return res.json({message:"No result Found.",status:400,data:error});
        }
        else{
            return res.json({status : 200, message :"Trains", data : result});
        }
    });
}

let stationNameToCode=function(req,res){
    let name=req.body.station_name;
    let stationCode=service.stnNameToCode(name);
    stationCode.then(function(result,error){
        if(error){
            return res.json({message:"No result Found.",status:400,data:error});
        }
        else{
            return res.json({status : 200, message :"Station", data : result});
        }
    });
}

let stationCodeToName= function(req,res){
    let code=req.body.station_code;
    let stationName=service.stnCodeToName(code);
    stationName.then(function(result,error){
        if(error){
            return res.json({message:"No result Found.",status:400,data:error});
        }
        else{
            return res.json({status : 200, message :"Station", data : result});
        }
    });
}

exports.train = train;
exports.stations=stations;
exports.liveTrainStatus=liveTrainStatus;
exports.pnrStatus=pnrStatus;
exports.trainRoutes=trainRoutes;
exports.seatAvailability=seatAvailability;
exports.trainBetweenStation=trainBetweenStation;
exports.trainNameNumber=trainNameNumber;
exports.fareEnquiry=fareEnquiry;
exports.trainArrival=trainArrival;
exports.canceledTrain=canceledTrain;
exports.reScheduledTrain=reScheduledTrain;
exports.stationNameToCode=stationNameToCode;
exports.stationCodeToName=stationCodeToName;