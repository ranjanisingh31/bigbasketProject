var events = require("events");
// var myEmitter = new events.EventEmitter();
// myEmitter.on("someEvent", function(mssg) {
//   console.log(mssg);
// });
// myEmitter.emit("someEvent", "the event was emitted");
var util = require("util");
var Person = function(name) {
  this.name = name;
};
util.inherits(Person, events.EventEmitter);
var a = new Person("a");
var b = new Person("b");
var c = new Person("c");
var people = [a, b, c];
people.forEach(function(person) {
  person.on("speak", function(mssg) {
    console.log(person.name + " speak:" + mssg);
  });
});
a.emit("speak", "hiii");
b.emit("speak", "hlooooo");
