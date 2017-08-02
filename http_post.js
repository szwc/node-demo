var http = require('http');
var qs = require('querystring');
var util = require('util');
var hostname='127.0.0.1';
var port = 3000;

// post请求


// var posthtml = '<!DOCTYPE html>'+
// 				'<html lang="en">'+
// 				'<head>'+
// 				'<meta charset="UTF-8">'+
// 				'<title>posthtml</title>'+
// 				'</head>'+
// 				'<body>'
// 				'	<form method="post">'+
// 						'网站名：<input type="text" name="name"><br>'+
// 						'网站url：<input type="text" name="url"><br>'+
// 						'<input type="submit">'+
// 					'</form>'+
// 				'</body>'+
// 				'</html>';
var posthtml = '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
  '<body>' +
  '<form method="post">' +
  '网站名： <input name="name"><br>' +
  '网站 URL： <input name="url"><br>' +
  '<input type="submit">' +
  '</form>' +
  '</body></html>';
var server = http.createServer(function (req,res) {
	
	var post = '';
	req.on('data',function (chunk) {
		console.log(chunk);
		post+=chunk;
		console.log(post);
	})
	req.on('end',function () {
		// console.log(post);
		post = qs.parse(post);
		// res.end(util.inspect(post));
		res.writeHead(200,{'Content-Type':'text/html;charset=utf8'});
		if(post.name && post.url){
			res.write(util.inspect(post));

			res.write("网站名："+post.name);
			res.write("<br>");
			res.write("网站url："+post.url);
		}else{
			res.write(posthtml);
		}
		res.end();
	})
	
})

server.listen(port,hostname,function () {
	console.log(`服务器运行在 http://${hostname}:${port}`)
});