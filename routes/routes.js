var express = require('express');
router = express.Router();
// var jwt = require('jsonwebtoken');
var sampleRoutes = require('../controllers/mainCtrl');
process.env.SECRET_KEY = "thisismysecretkey";

// ************** Login Start ***************
router.post('/submitdata', sampleRoutes.submitdataCtrls);
router.get('/getalldata', sampleRoutes.baby);
router.get('/deletedata/:id', sampleRoutes.deletedatactrl);
module.exports = router;















