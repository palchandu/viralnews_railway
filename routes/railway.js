var express = require('express');
var router = express.Router();
var rail = require('../controller/railwayController');


router.post('/train', rail.train);

module.exports = router;