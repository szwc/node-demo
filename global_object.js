//全局对象和全局变量


//__filename  当前正在执行的脚本文件名
console.log(__filename);

//_dirname  当前执行脚本所在目录
console.log(__dirname);

//setTimeout(cb, ms) 全局函数在指定的毫秒(ms)数后执行指定函数(cb)。：setTimeout() 只执行一次指定函数。返回一个代表定时器的句柄值。
// function hello () {
// 	console.log('hello');
// }
// var t = setTimeout(hello,2000);
// console.log(t);
// //clearTimeout( t ) 全局函数用于停止一个之前通过 setTimeout() 创建的定时器。 参数 t 是通过 setTimeout() 函数创建的定时器。
// clearTimeout(t);


//process
process.on('exit',function (code) {
	setTimeout(function () {
		console.log('hello');
	},2000);
	console.log('退出码为:',code);
})
console.log('gameover');


process.stdout.write('hello world'+'\n');
process.argv.forEach(function (val,index,array) {
	console.log(index+': '+val);
})
//获取执行路径
console.log(process.execPath)

console.log(process.platform)

 a = 'haha';
console.log(global.a);