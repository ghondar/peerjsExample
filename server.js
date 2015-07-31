var http = require('http');
var fs = require("fs");
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  
  res.end(fs.readFileSync("index.html", "utf8"));
}).listen(8000);
console.log('Server running 8000');