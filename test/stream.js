var fs = require("fs");


//创建可读流
// var data = '';

// var readerStream = fs.createReadStream('input.txt');

// console.log(readerStream);
// readerStream.setEncoding("UTF8");

// readerStream.on('data',function (chunk) {
// 	// console.log("这是chunk:"+chunk);
// 	console.log("这是data:"+data);
// 	data += chunk;
// 	// console.log("这是chunk:"+chunk);
// 	console.log("这是data:"+data);
// })

// readerStream.on('end',function () {
// 	console.log(data);
// })
// readerStream.on('error',function (err) {
// 	console.log(err.stack);
// })
// console.log('程序执行完毕');




//创建写入流
// var data = "hello world \n这是一个写入流";

// var writerStream = fs.createWriteStream("output.txt");

// //写入数据
// writerStream.write(data,"UTF8");

// writerStream.end();

// writerStream.on('finish',function () {
// 	console.log("写入完成");
// })
// writerStream.on('error',function (err) {
// 	console.log(err.stack);
// })
// console.log("程序执行完毕");


//管道流

var readerStream = fs.createReadStream('input.txt');

var writerStream = fs.createWriteStream('output.txt');

readerStream.pipe(writerStream);
console.log('gameover');