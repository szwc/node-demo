var http = require('http');
// var fs = require('fs');
var url = require('url');
// var util = require('util');
var qs = require('querystring');
var host = '127.0.0.1';
var port = 3000;
// var data='',postdata,html;
var server;

function start(){
	function onrequest(req,res){

		var requrl = url.parse(req.url);
		var pathname = url.parse(req.url).pathname;
		console.log(requrl);
		console.log(pathname)
		res.end('hello world');
	}
	 server = http.createServer(onrequest);

	 server.listen(port,host,function () {
		console.log(`服务器运行在  http://${host}:${port}`)
	})
}

exports.start = start;


