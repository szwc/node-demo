var qs = require('querystring');


// qs.parse   将url的查询字符串解析成键值对的集合
var str = 'a=1&b=2';
var str1 = 'foo=bar&abc=xyz&abc=1243';
console.log(qs.parse(str));
console.log(qs.parse(str1));


// qs.stringify   与qs.parse相反  将对象序列化为查询字符串

var obj1 = {username:'zhangsan',age:23,address:'北京西城区'};
console.log(qs.stringify(obj1));
console.log(typeof qs.stringify(obj1));