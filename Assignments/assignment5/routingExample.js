var http = require("http");
var fs = require("fs");
var server = http.createServer(function(req, res) {
  console.log("request was made:" + req.url);
  if (req.url === "/home" || req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream(__dirname + "/index.html", "utf8").pipe(res);
  } else if (req.url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream(__dirname + "/contact.html", "utf8").pipe(res);
  } else if (req.url === "/api/ninja") {
    res.writeHead(200, { "Content-Type": "application/json" });
    var ninja = [
      {
        name: "ranjani",
        age: 20
      },
      {
        name: "ruchi",
        age: 22
      },
      {
        name: "rahul",
        age: 15
      }
    ];
    res.end(JSON.stringify(ninja));
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    fs.createReadStream(__dirname + "/404.html", "utf8").pipe(res);
  }
});

server.listen(3000, "127.0.0.1");
console.log("listening to port 3000");
