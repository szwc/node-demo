// var url = require('url');

// var str = "https://www.szwc.com:8080/p/a/t?a=b&c=d#hahah";
// console.log(url.parse(str));


// var myurl = new url('http://www.baidu.com');
// console.log(myurl);


//这个花括号 {URL}  可以使URL 成为一个构造函数，什么玩意啊。。。。
const {URL} = require('url');
var myurl = new URL('http://www.baidu.com');
console.log("myurl:"+myurl);