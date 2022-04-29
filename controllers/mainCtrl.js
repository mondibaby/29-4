var moment = require('moment');
var http = require("https");
var fs = require('fs');
process.env.SECRET_KEY = "thisismysecretkey";
var appmdl = require('../models/mainModel');
var AWS = require('aws-sdk');
const { Console } = require('console');
var awsS3 = 'config/aws.config.json';
var request = require('request'); //for otp

// ************** Login Start ***************
exports.submitdataCtrls = function (req, res) {
    var data=req.body;
    appmdl.submitdatamdl(data, function (err, results) {
        if (err) {
            res.send({ "status": 500, "msg": "Server Error" });
            return;
        }
        res.send({ 'status': 200, 'data': results});
    });
}

exports.baby = function (req, res) {
    appmdl.siri(function (err, results) {
        if (err) {
            res.send({ "status": 500, "msg": "Server Error" });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}


exports.deletedatactrl = function (req, res) {
    var indicator = req.params.id
    appmdl.deletedatamdl(indicator,function (err, results) {
        if (err) {
            res.send({ "status": 500, "msg": "Server Error" });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}