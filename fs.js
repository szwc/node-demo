var fs = require('fs');
var datastr;
var file = __dirname+'/test.js';

// 文件系统模块

// 读取文件
// fs.readFile(file,function (err,data) {
// 	if(err){
// 		return console.error(err);
// 	}
// 	console.log('异步读取:'+data.toString());
// 	 // datastr = data.toString();
// 	 // console.log(datastr);
// });

// 获取文件信息
// fs.stat(file,function (err,stats) {
// 	console.log(stats.isFile());
// 	console.log(stats);
// })


// 写入文件
// fs.writeFile('a.js','fs write 写入的内容',function (err) {
// 	if(err) return console.error(err);

// 	console.log('写入成功');
// 	console.log('------------');
// 	console.log('读取写入的数据');
// 	fs.readFile('a.js',function (err,data) {
// 		if(err) return console.error(err);
// 		console.log('异步读取:'+data.toString())
// 	})

// })
//writeFile  会一直执行，有问题。。。