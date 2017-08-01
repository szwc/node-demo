// var buf = new Buffer(10);
// console.log(buf);
// var len = buf.write("hello world xiedao zhelema ");
// console.log(len);
// console.log(buf);
// var str = buf.toString();
// console.log(str);




var buf1 = new Buffer(26);
// var len = buf1.write(97);
buf1[0]=97;
buf1[1]=98;
console.log(buf1);
var str = buf1.toString();
console.log(str);

console.log(buf1);
var json = buf1.toJSON();
console.log(json);