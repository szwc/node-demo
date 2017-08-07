var http = require('http');
var url = require('url');
var util = require('util');

var hostname='127.0.0.1';
var port = 3000;
var server = http.createServer(function (req,res) {
	res.writeHead(200,{'Content-Type':'text/plain;charset=utf8'});
	var requrlobj = url.parse(req.url,true);  //将请求url转换为对象
	res.write(util.inspect(requrlobj));

	var reqpath = requrlobj.pathname;
	res.write('req-url-pathname:'+reqpath+"\n");

	res.write("----------------\n");
	//获得query字符串对象
	var queryobj = requrlobj.query
	res.write('getdataobj:'+util.inspect(queryobj)+"\n");

	res.write("----------------\n");
	res.write("网站名："+queryobj.name+"\n");
	res.write("网址："+queryobj.address+"\n");

	res.end('hello world');
})

server.listen(port,hostname,function () {
	console.log(`服务器运行在 http://${hostname}:${port}`)
});