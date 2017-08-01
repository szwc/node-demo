var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');

var hostname = '127.0.0.1';
var port = 3000;
var data = '';
var server = http.createServer(function (req,res) {
	
	//渲染文件index.html
	// var readStream = fs.createReadStream('index.html');
	// readStream.on('data',function (chunk) {
	// 	data +=chunk;
	// })
	// readStream.on('end',function () {
	// 	console.log('读取文件结束');
	// 	res.end(data);
	// })


	
	//qs   查询字符串
	res.write("url:"+req.url+"\n");
	res.write("url.parse:"+JSON.stringify(url.parse(req.url,true,true))+"\n");
	res.write("pathname:"+url.parse(req.url).pathname+"\n");
	
	res.write("query:"+url.parse(req.url).query+"\n");
	var query = url.parse(req.url).query;

	// res.write("query:"+qs.parse(query)+"\n");
	// res.write(qs.parse(url.parse(req.url).query));
	res.write("pathname:"+url.parse(req.url).pathname+"\n");
	


	res.write("-----------------------------------\n")
	
	// res.write("url typeof:"+ typeof req.url+"\n");
	// res.write(qs.parse(req.url.query));


	// qs.parse   报尼玛的错
	var str = "a=b&c=d";
	// console.log(qs.parse(str));
	res.end();
	


});
server.listen(port,hostname,function () {
	console.log(`服务器运行在 http://${hostname}:${port}`);
})