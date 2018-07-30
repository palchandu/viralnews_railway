var express = require('express');
var Request = require("request");
var apikey="3lg4t96auw";

var getAllTrains=function(train_name){
    let trainPromise=new Promise(function(resolve,reject){
        Request.get("https://api.railwayapi.com/v2/suggest-train/train/"+train_name+"/apikey/"+apikey,function(error,response,body){
            if(error){
                //return res.json({message:"Train list not fooun",status:400});
                reject(error);
            }
            else{
                let data = JSON.parse(response.body);
                resolve(data);
            }
        });
    });
    return trainPromise;
}
var getAllStationsName = function(station_name){
    let stationsPromise=new Promise(function(resolve,reject){
        Request.get("https://api.railwayapi.com/v2/suggest-station/name/"+station_name+"/apikey/"+apikey+"/",function(error,response,body){
        if(error){
            reject(error);
        }
        else{
            let data = JSON.parse(response.body);
            resolve(data);
        }
    });
    });

    return stationsPromise;
}

var getLiveStatus=function(train_number,start_date)
{
    let liveStatusPromise=new Promise(function(resolve,reject){
        Request.get("https://api.railwayapi.com/v2/live/train/"+train_number+"/date/"+start_date+"/apikey/"+apikey+"/",function(error,response,body){
            if(error)
            {
                reject(error);
            }
            else{
                let data=JSON.parse(response.body);
                resolve(data);
            }
        });
    });

    return liveStatusPromise;
}

let getPnrStatus=function(pnr_number){

    let pnrStatusPromise=new Promise(function(resolve,reject){
        Request.get("https://api.railwayapi.com/v2/pnr-status/pnr/"+pnr_number+"/apikey/"+apikey+"/",function(error,response,body){
            if(error){
                reject(error);
            }
            else{
                let data=JSON.parse(response.body);
                resolve(data);
            }
        })
    });

    return pnrStatusPromise;
}

let getTrainRoutes=function(train_number){
    let trainRoutesPromise=new Promise(function(resolve,reject){
        Request.get("https://api.railwayapi.com/v2/route/train/"+train_number+"/apikey/"+apikey+"/",function(error,response,body){
            if(error)
            {
                reject(error);
            }
            else{
                let data=JSON.parse(response.body);
                resolve(data);
            }
        });
    });
    return trainRoutesPromise;
}

let getSeatAvailability=function(train_number,source,dest,journy_date,prefrence,quota){
    let seatAvailPromise=new Promise(function(resolve,reject){
        Request.get("https://api.railwayapi.com/v2/check-seat/train/"+train_number+"/source/"+source+"/dest/"+dest+"/date/"+journy_date+"/pref/"+prefrence+"/quota/"+quota+"/apikey/"+apikey+"/",function(error,response,body){
        if(error)
        {
            reject(error);
        }
        else{
            let data=JSON.parse(response.body);
            resolve(data);
        }
        });
    });

    return seatAvailPromise;
}

let gettrainBtnStation=function(source,dest,date){
    let trnBtnStnPromise=new Promise(function(resolve,reject){
    Request.get("https://api.railwayapi.com/v2/between/source/"+source+"/dest/"+dest+"/date/"+date+"/apikey/"+apikey+"/",function(error,response,body){
        if(error){
            reject(error);
        }
        else{
            let data=JSON.parse(response.body);
            resolve(data);
        }
    });
    });
    return trnBtnStnPromise;
}

let gettrainNameNumber=function(name_number){
    let trnNameNumberPromise=new Promise(function(resolve,reject){
    Request.get("https://api.railwayapi.com/v2/name-number/train/"+name_number+"/apikey/"+apikey+"/",function(error,response,body){
        if(error){
            reject(error);
        }
        else{
            let data=JSON.parse(response.body);
            resolve(data);
        }
    });
    });
    return trnNameNumberPromise;
}

let getFare=function(train,source,dest,age,pref,quota,date){
    let farePromise=new Promise(function(resolve,reject){
    Request.get("https://api.railwayapi.com/v2/fare/train/"+train+"/source/"+source+"/dest/"+dest+"/age/"+age+"/pref/"+pref+"/quota/"+quota+"/date/"+date+"/apikey/"+apikey+"/",function(error,response,body){
        if(error){
            reject(error);
        }
        else{
            let data=JSON.parse(response.body);
            resolve(data);
        }
    });
    });
    return farePromise;
}

let traiArrival=function(station_code){
    let traiArrivalPromise=new Promise(function(resolve,reject){
    Request.get("https://api.railwayapi.com/v2/arrivals/station/"+station_code+"/hours/4/apikey/"+apikey+"/",function(error,response,body){
        if(error){
            reject(error);
        }
        else{
            let data=JSON.parse(response.body);
            resolve(data);
        }
    });
    });
    return traiArrivalPromise;
}

let trainCancel=function(date){
    let trainCancelPromise=new Promise(function(resolve,reject){
    Request.get("https://api.railwayapi.com/v2/cancelled/date/"+date+"/apikey/"+apikey+"/",function(error,response,body){
        if(error){
            reject(error);
        }
        else{
            let data=JSON.parse(response.body);
            resolve(data);
        }
    });
    });
    return trainCancelPromise;
}

let trainReSch=function(date){
    let trainReSchPromise=new Promise(function(resolve,reject){
    Request.get("https://api.railwayapi.com/v2/rescheduled/date/"+date+"/apikey/"+apikey+"/",function(error,response,body){
        if(error){
            reject(error);
        }
        else{
            let data=JSON.parse(response.body);
            resolve(data);
        }
    });
    });
    return trainReSchPromise;
}

let stnNameToCode=function(station_name){
    let stnToCodePromise=new Promise(function(resolve,reject){
    Request.get("https://api.railwayapi.com/v2/name-to-code/station/"+station_name+"/apikey/"+apikey+"/",function(error,response,body){
        if(error){
            reject(error);
        }
        else{
            let data=JSON.parse(response.body);
            resolve(data);
        }
    });
    });
    return stnToCodePromise;
}

let stnCodeToName=function(station_code){
    let codeToNamePromise=new Promise(function(resolve,reject){
    Request.get("https://api.railwayapi.com/v2/code-to-name/code/"+station_code+"/apikey/"+apikey+"/",function(error,response,body){
        if(error){
            reject(error);
        }
        else{
            let data=JSON.parse(response.body);
            resolve(data);
        }
    });
    });
    return codeToNamePromise;
}

exports.getAllTrains=getAllTrains;
exports.getAllStationsName = getAllStationsName;
exports.getLiveStatus=getLiveStatus;
exports.getPnrStatus=getPnrStatus;
exports.getTrainRoutes=getTrainRoutes;
exports.getSeatAvailability=getSeatAvailability;
exports.gettrainBtnStation=gettrainBtnStation;
exports.gettrainNameNumber=gettrainNameNumber;
exports.getFare=getFare;
exports.traiArrival=traiArrival;
exports.trainCancel=trainCancel;
exports.trainReSch=trainReSch;
exports.stnNameToCode=stnNameToCode;
exports.stnCodeToName=stnCodeToName;