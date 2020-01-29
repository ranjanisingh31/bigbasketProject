var key = document.getElementById("sb");

//Adding elements in Set
var s = new Set();
function addValue() {
  if (s.add(key.value)) {
    alert("Element " + key.value + " added in Set");
  } else {
    alert("Element " + key.value + " added in Set");
  }
  display();
}

//Delete element of set
function deleteValue() {
  if (s.delete(key.value)) {
    alert("Element " + key.value + " deleted in Set");
  } else {
    alert("Element " + key.value + " not found in Set");
  }
  display();
}

//search element of set
function searchValue() {
  if (s.has(key.value)) {
    alert("Element " + key.value + " found");
  } else {
    alert("Element " + key.value + " not found in Set");
  }
}

//clear set
function clearValue() {
  s.clear();
  display();
}

//Display elements in set
function display() {
  var e = "<h3>Elements in set:<br/>";
  var arr = Array.from(s);
  for (var i = 0; i < arr.length; i++) {
    e += arr[i] + "</h3></br>";
  }
  document.getElementById("para").innerHTML = e;
}
