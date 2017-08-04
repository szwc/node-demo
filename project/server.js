var http = require('http');
var url = require('url');
var qs = require('querystring');

var host = '127.0.0.1';
var port = 3000;


function start(router,handle){
	function onrequest(req,res){

		// var requrl = url.parse(req.url);
		var pathname = url.parse(req.url).pathname;
		// console.log(requrl);
		// console.log(pathname);
		// res.end('hello world');

		router(pathname,handle,req,res)
	}
	

	http.createServer(onrequest).listen(port,host,function () {
		console.log(`服务器运行在  http://${host}:${port}`)
	})
}

exports.start = start;


