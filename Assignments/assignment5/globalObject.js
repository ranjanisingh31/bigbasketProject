console.log("hey");
setTimeout(function() {
  console.log("hiiiiiiiiiiii");
}, 2000);
var time = 0;
var timer = setInterval(function() {
  time += 2;
  console.log(time);
  if (time > 5) {
    clearInterval(timer);
  }
}, 2000);
console.log(__dirname);
console.log(__filename);
