var counter = function(arr) {
  return "there are " + arr.length + " elements";
};

var adder = function(a, b) {
  return `sum is ${a + b}`;
};

var pi = 3.14;
var simpleMessage = "hiiiiiiiiiiiiiii";
var x = {
  fname: "ranjani",
  lname: "singh"
};
// module.exports.counter = counter;
// module.exports.adder = adder;
// module.exports.pi = pi;
// module.exports.simpleMessage = "hiiiii";
//or
module.exports = {
  counter: counter,
  adder: adder,
  pi: pi,
  simpleMessage: simpleMessage,
  x: x
};
