var sqldb = require('../config/dbconnect');
var dbutil = require(appRoot + '/utils/dbutils');
var moment = require('moment');


// ************** Login Start ***************
exports.submitdatamdl = function (data, callback) {
	var cntxtDtls = "in submitdatamdl";
	var QRY_TO_EXEC = ` insert into formdetails(name,email,body) values('${data.name}','${data.email}','${data.body}')`;
	 console.log(QRY_TO_EXEC);
	if (callback && typeof callback == "function") {
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	}
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
exports.siri = function ( callback) {
	var cntxtDtls = "in siri";
	var QRY_TO_EXEC = `SELECT * from formdetails where d_in=0`;
	console.log(QRY_TO_EXEC);
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};


exports.deletedatamdl = function (id, callback) {
	var cntxtDtls = "in deletedatamdl";
	var QRY_TO_EXEC = `update formdetails set d_in =1 where id = '${id}'`;
	console.log(QRY_TO_EXEC);
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
