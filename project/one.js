var mysqldata = require('./mysql');
console.log(mysqldata);
var req,res;
function cc(p) {
	console.log(p);
}
mysqldata.getdata(req,res,cc);