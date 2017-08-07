var http = require('http');

//创建web服务器
var fs = require('fs');
var url = require('url');
var util = require('util');
http.createServer(function (req,res) {
	var pathname = url.parse(req.url).pathname;
	// res.write(util.inspect(url.parse(req.url)));
	console.log("Request for "+ pathname + " received");
	fs.readFile(pathname.substr(1),function (err,data) {
		if(err) {
			return console.error(err);
			res.writeHead(404,{"Content-Type":"text/html;charset=utf8"})
		}else{
			res.writeHead(200,{"Content-Type":"text/html;charset=utf8"})
			res.write(data.toString());
		}
		res.end();
	})
	
}).listen(3000);
console.log('Server running at http://127.0.0.1:3000/');