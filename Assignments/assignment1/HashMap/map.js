let m = new Map();

//Adding elements in map
function addValue() {
  console.log(1);
  var k = prompt("key=");
  var v = prompt("value=");
  if (m.set(k, v)) {
    alert("key " + k + " and value " + v + " pair added in map");
  } else {
    alert("key " + k + " and value " + v + " pair not added in map");
  }
  display();
}

//deleting key-value pair in map
function deleteValue() {
  var d = prompt("Enter key to be deleted?");
  if (m.delete(d)) {
    alert("key " + d + " and value " + m.get(d) + " pair deleted in map");
  } else {
    alert("key " + d + " and value " + m.get(d) + " pair not found in map");
  }
  console.log(1);
  display();
}

//searching key-value pair in map
function searchValue() {
  var s = prompt("Enter key to be searched?");
  if (m.has(s)) {
    alert("pair found in map");
  } else {
    alert("pair not found in map");
  }
}

//display all pairs of map
function display() {
  var e = "key &nbsp value</br>";
  for (var [key, value] of m.entries()) {
    e += key + "    " + value + "</br>";
  }
  document.getElementById("para1").innerHTML = e;
}

//clear all
function clearValue() {
  m.clear();
  alert("cleared");

  display();
}
