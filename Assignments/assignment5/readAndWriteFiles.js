var fs = require("fs");
//====================synchronous read and write

//read file
// try {
//   var read = fs.readFileSync("readMe.txt", "utf8");
//   console.log(read);
// } catch (err) {
//   console.log(err);
// }

// write file
// try {
//   var read = fs.readFileSync("readMe.txt", "utf8");
//   fs.writeFileSync("writeMe.txt", read);
// } catch (err) {
//   console.log(err);
// }

// =====================asynchronous read and write

//read
// var read = fs.readFile("readMe.txt", "utf8", function(err, data) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });
// console.log("test");

//write
var read = fs.readFile("readMe.txt", "utf8", function(err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
    fs.writeFile("writeMe.txt", data, function() {
      console.log("created file asynchronously");
    });
  }
});
