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

server.start(router.router,handle);