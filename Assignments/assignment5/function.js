//normal function
function sayHi() {
  console.log("hi");
}
sayHi();
//function expression
var sayBye = function() {
  console.log("bye");
};
sayBye();
//pass function as an argument to another function
function callBack(fun) {
  fun();
}
var sayHello = function() {
  console.log("hello");
};
callBack(sayHello);
