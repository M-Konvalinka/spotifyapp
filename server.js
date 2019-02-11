var http = require("http");
require('dotenv').config();

console.log(process.env.fakedata);

http.createServer(function(request, response){
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
}).listen(8888);