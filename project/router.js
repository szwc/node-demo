function router(path,handle,req,res){
	if(path != "/favicon.ico"){
		if(typeof handle[path] == "function"){
			console.log("来自 "+ path +" 的请求接收到了");
			handle[path](req,res);
		}else{
			console.log(typeof path);
			console.log("no handle for request "+path);
			console.log(typeof handle[path]);
			console.log( handle[path]);
			res.end("<h1>404</h1>");
		}
	}
}

exports.router = router;