var http = require('http');
var util = require('util');
var qs = require('querystring');
var host = '127.0.0.1';
var port = 4000;
var data,postdata;
var server = http.createServer(function (req,res) {
	
	req.on('data',function (chunk) {
		data+=chunk;
	})
	req.on('end',function () {
		// res.end(qs.parse(util.inspect(data)));;
		console.log(data)
		console.log(qs.parse(data));
		postdata = qs.parse(data);
		res.writeHead(200,{"Content-Type":"text/html;charset=utf8"});
		if( postdata.age){
			res.write("name: "+postdata.name+"\n");
			res.write("username: "+postdata.username+"\n");
			res.write("gender: "+postdata.gender+"\n");
			res.write("age: "+postdata.age+"\n");
		}else{
			res.write('');
		}
		res.end();;
	})
	//res.end('hello world');
})
server.listen(port,host,function () {
	console.log(`服务器运行在  http://${host}:${port}`)
})