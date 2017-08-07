var mysql = require('mysql');
// var connection = mysql.createConnection({
// 	host:'127.0.0.1',
// 	port:'3306',
// 	user:'root',
// 	password:'',
// 	database:'test'
// })

// connection.connect();
// var querySql ='SELECT * FROM websites WHERE id=1';
// connection.query(querySql,function (err,result) {
// 	if(err){
// 		console.log('[SELECT ERROR - ]',err.message);
// 		return;
// 	}
// 	console.log(result);
// })
// connection.end();
exports.m = mysql;
console.log(module);