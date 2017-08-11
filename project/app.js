var router = require('./router');
var server = require('./server');
var fs = require('fs');
var req_handle = require('./req_handle');

var handle ={};
handle["/"]=req_handle.handlefun.root;
handle["/home"]=req_handle.handlefun.index;
handle["/movie"]=req_handle.handlefun.movie;
handle["/post"]=req_handle.handlefun.po;
handle["/users"]=req_handle.handlefun.users;
handle["/loginhtml"]=req_handle.handlefun.loginhtml;
handle["/public/js/jquery.js"]=req_handle.handlefun.js;
handle["/public/css/index.css"]=req_handle.handlefun.css;
handle["/loginhtml"]=req_handle.handlefun.loginhtml;





handle["/login"]=req_handle.handlefun.login;


server.start(router.router,handle);