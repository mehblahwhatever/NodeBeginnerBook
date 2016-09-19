var http = require("http");

http.createServer(function (request, response) {
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello World");
	response.end();
}).listen(8888);

/*
// Valid
// This creates a server listening at port 8888, but does nothing else
var http = require("http");

var server= http.createServer();
server.listen(8888);
*/
