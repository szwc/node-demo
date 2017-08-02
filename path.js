var path = require('path');

// path模块 提供了用于处理文件路径的方法

// console.log(__filename);
// console.log(__dirname);

// //path.basename  返回一个 path 的最后一部分
// console.log("basename: "+path.basename(__filename));
// console.log("basename: "+path.win32.basename(__filename));

// // console.log(process.env.PATH);

// //path.dirname  返回一个 path 的目录名
// console.log("dirname: "+path.dirname(__filename));

// //path.extname  返回一个 path 的扩展名
// console.log("extname: "+path.extname(__filename));
// console.log("extname: "+path.extname(__dirname+"input.txt"));
// console.log("extname: "+path.extname(path.dirname(__filename)+"input.txt"));

//path.join()
console.log(path.join('/foo','bar','baz/asdf','quux','..'));
console.log(path.join('/foo','bar','baz/asdf','quux'));
console.log(path.join('/foo','bar','baz/asdf','quux',''));
console.log(path.join(__dirname,'index.html'));
console.log(path.join(__dirname,'index','.html'));
console.log(path.join(__dirname,'.txt'));
console.log(path.join('foo','bar','baz/asdf','quux','.ja','aa'));




//path.parse() 返回一个对象，对象的属性表示 path 的元素
// console.log(path.parse(__filename));

//path.sep
console.log('foo\\bar\\baz'.split(path.sep));