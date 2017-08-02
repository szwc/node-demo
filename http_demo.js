var http = require('http');

var hostname='127.0.0.1';
var port = 3000;
var server = http.createServer(function (req,res) {
	

	res.end('hello world');
})

server.listen(port,hostname,function () {
	console.log(`服务器运行在 http://${hostname}:${port}`)
});