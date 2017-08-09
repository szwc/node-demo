var fs = require('fs');
var qs = require('querystring');
var util;
var mysqldata = require('./mysql');
// var data;
		// var readstream = fs.createReadStream('index.html');
		// readstream.on('data',function (chunk) {
		// 			data += chunk;
		// 		})
		// readstream.on('end',function () {
		// 	data = data.toString();
		// })

var handlefun = {
	root:function (req,res) {
		res.end();
	},
	index:function (req,res) {
		fs.readFile('views/index.html',function (err,data) {
			if(err){
				return console.error(err);
			}else{
				res.writeHead(200,{"Content-Type":"text/html;charset=utf8"});
				res.end(data);
			}
		})
		
	},
	movie:function (req,res) {
		res.writeHead(200,{"Content-Type":"text/html;charset=utf8"});
		var a;
		function cc(p){
			res.write(JSON.stringify(p));
			res.end();
		};
		mysqldata.getdata(req,res,cc)
		

		
		
	},
	po:function (req,res) {
		var postdata;
		req.on('data',function (chunk) {
			postdata += chunk;
		})	
		req.on('end',function () {
			// console.log(data);
			// console.log(typeof data);
			postdata = qs.parse(postdata);
			console.log(postdata);
			res.writeHead(200,{"Content-Type":"text/html;charset=utf8"});
			var item ={undefinedfirstname:"姓名",username:"用户名",gender:"性别",age:"年龄",address:"籍贯",married:"婚否"}
				for(var k in postdata){
					res.write( item[k] + ":"+postdata[k]+"\n")
				}
				res.end();
				

		})

	},
	users:function (req,res) {
		fs.readFile('views/users.html',function (err,data) {
			if(err){
				return console.error(err);
			}else{
				res.writeHead(200,{"Content-Type":"text/html;charset=utf8"});
				res.end(data);
			}
		})
	}
};

exports.handlefun = handlefun;