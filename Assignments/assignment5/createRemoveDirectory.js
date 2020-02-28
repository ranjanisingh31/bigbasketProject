var fs = require("fs");

//=========create and remove directory synchronously
//fs.mkdirSync("dir");
//fs.rmdirSync("dir");

//=========delete file synchronously
//fs.unlinkSync("writeMe.txt")

//=========delete file asynchronously
// fs.unlink("writeMe.txt", function() {
//   console.log("deleted asynchronously");
// });

//=================create directory asynchronously
fs.mkdir("stuff", function() {
  fs.readFile("readMe.txt", "utf8", function(err, data) {
    if (err) {
      console.log(err);
    } else {
      fs.writeFile("./stuff/writeMe.txt", data, function() {
        console.log("read and write to file");
      });
    }
  });
});

//=================remove directory asynchronously
// fs.unlink("./stuff/writeMe.txt", function() {
//   fs.rmdir("stuff", function() {
//     console.log("deleted directory");
//   });
// });
