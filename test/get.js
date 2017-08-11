// 单独发送get请求

var http = require('http');

var opts ={
	host:'bubbler.labs.douban.com',
	port:80,	
	path:'/j/user/ahbei',
	// method:'GET'	   如果是http.request 发送，需添加发送发送方式 get/post
};
// var req = http.request(opts,function (res) {
// 	// console.log(res);
// 	res.on('data',function (data) {
// 		console.log(data);
// 		console.log(data.toString());
// 	})
// })
// req.end();


http.get(opts,function (res) {
	res.on('data',function (data) {
		// console.log(data);
		console.log(data.toString());
		// console.log(data.toJSON());
		// console.log(data.length);
	})
})