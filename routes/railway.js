var express = require('express');
var router = express.Router();
var rail = require('../controller/railwayController');


router.post('/train', rail.train);
router.post('/station', rail.stations);
router.post('/liveStatus',rail.liveTrainStatus);
router.post('/pnrStatus',rail.pnrStatus);
router.post('/trainRoutes',rail.trainRoutes);
router.post('/seatAvail',rail.seatAvailability);
router.post('/trainBtnStn',rail.trainBetweenStation);
router.post('/trainNameNumber',rail.trainNameNumber);
router.post('/fairEnquiry',rail.fareEnquiry);
router.post('/trainArrival',rail.trainArrival);
router.post('/canceledTrain',rail.canceledTrain);
router.post('/reScheduledTrain',rail.reScheduledTrain);
router.post('/stationNameToCode',rail.stationNameToCode);
router.post('/stationCodeToName',rail.stationCodeToName);
module.exports = router;