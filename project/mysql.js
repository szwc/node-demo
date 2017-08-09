var mysql = require('mysql');
var async = require('async');
var connection = mysql.createConnection({
	host:'127.0.0.1',
	port:'3306',
	user:'root',
	password:'hongju0908',
	database:'test'
})

// connection.connect();
// var querySql ='SELECT * FROM websites';
// connection.query(querySql,function (err,result) {
// 	if(err){
// 		console.log('[SELECT ERROR - ]',err.message);
// 		return;
// 	}
// 	console.log(result);
// })
// connection.end();


exports.getdata = function (req,res,callback) {
	async.auto({
		getda:function (cb) {
			var connection = mysql.createConnection({
				host:'127.0.0.1',
				port:'3306',
				user:'root',
				password:'hongju0908',
				database:'test'
			});
			connection.connect();
			var querySql ='SELECT * FROM websites';
			connection.query(querySql,function (err,result) {
				if(err){
					console.log('[SELECT ERROR - ]',err.message);
					return;
				}
				cb(null,result)
			})
			connection.end();
		},
	},function (err,results) {
		callback(results)
	})
}
function cc(p) {
	console.log(p);
}
