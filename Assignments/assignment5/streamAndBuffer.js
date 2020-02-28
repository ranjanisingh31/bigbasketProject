var fs = require("fs");

//readable stream
// var myReadStream = fs.createReadStream(__dirname + "/readMe.txt", "utf8");
// myReadStream.on("data", function(chunk) {
//   console.log("new chunk received");
//   console.log(chunk);
// });

//writeable stream
// var readMySream = fs.createReadStream(__dirname + "/readMe.txt");
// var writeMyStream = fs.createWriteStream(__dirname + "/writeMe.txt");
// readMySream.on("data", function(chunk) {
//   console.log("new chunk reciieved ");
//   writeMyStream.write(chunk);
// });

//using pipes
var readMySream = fs.createReadStream(__dirname + "/readMe.txt");
var writeMyStream = fs.createWriteStream(__dirname + "/writeMe.txt");
readMySream.pipe(writeMyStream);
