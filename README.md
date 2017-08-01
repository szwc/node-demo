# node demo

## node 简介

Node.js是运行在服务端的JavaScript。Node.js是一个事件驱动I/O服务端JavaScript环境，基于Google的V8引擎，V8引擎执行Javascript的速度非常快，性能非常好。
注意：
1.(事件驱动：javascript就是基于事件驱动的，如在浏览器界面的鼠标点击、移动等事件都可以触发js)
2.javascript是单线程的，所以会阻塞，异步是解决这一问题的好方法，所以nodejs 几乎所有方法都是异步的，由事件循环来协调。

### buffer
JavaScript 语言自身只有字符串数据类型，没有二进制数据类型。
但在处理像TCP流或文件流时，必须使用到二进制数据。因此在 Node.js中，定义了一个 Buffer 类，该类用来创建一个专门存放二进制数据的缓存区。(buffer就是一个存放二进制数据的缓存区)

`
var buffer = new Buffer(10);  //创建一个长度为10的buffer
buffer.write("hello world");  //往缓存区写入数据
buffer.toString()  			  //从缓存区读取数据
buffer.toJSON() 			  //转换为json
`
其余方法见nodejs官方文档


### stream(流)

流（stream）在 Node.js 中是处理流数据的抽象接口（abstract interface）。 stream 模块提供了基础的 API 。使用这些 API 可以很容易地来构建实现流接口的对象。

Node.js 提供了多种流对象。 例如， HTTP 请求 和 process.stdout 就都是流的实例。

流可以是可读的、可写的，或是可读写的。所有的流都是 EventEmitter 的实例。



### url模块

### 全局对象

global 最根本的作用是作为全局变量的宿主。按照 ECMAScript 的定义，满足以下条 件的变量是全局变量：
在最外层定义的变量；(需要注 意的是，在 Node.js 中你不可能在最外层定义变量，因为所有用户代码都是属于当前模块的， 而模块本身不是最外层上下文。)
全局对象的属性；
隐式定义的变量（未定义直接赋值的变量）。
注意： 永远使用 var 定义变量以避免引入全局变量，因为全局变量会污染 命名空间，提高代码的耦合风险。

__filename  获取当前正在执行脚本的文件名

__dirname	当前执行脚本的目录

process 它用于描述当前Node.js 进程状态的对象，提供了一个与操作系统的简单接口。通常在你写本地命令行程序的时候，少不了要 和它打交道
` process.execPath`		//执行路径

### fs(文件系统模块)

提供了一系列对文件的操作方法,读取、写入、删除、创建目录等等，都有异步，同步方法
`fs.writeFile(file,'要写入的内容',function(err,data){
	if err return console.error(err);
	console.log('写入成功')
})`
注意：多次对同一文件使用 fs.writeFile 且不等待回调，是不安全的。 对于这种情况，强烈推荐使用 fs.createWriteStream。   //好像很多方法都这样
注意：如果 file 指定为一个文件描述符，则它不会被自动关闭。

### querystring (查询字符串模块)

处理查询字符串
`querystring.parse('a=1&b=2')`   将查询字符串解析为一个对象 {a:1,b:2}

`querystring.stringify({foo:'bar',a:1,b:2})`  将对象解析为查询字符串 'foo=bar&a=1&b=2'
