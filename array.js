var key = document.getElementById("sb");

//Adding elemennts in array
var arr = new Array();
function addValue() {
  arr.push(key.value);
  alert("Element added in array " + key.value);
  display();
}

//Display function
function display() {
  var e = "</hr>";
  for (var i = 0; i < arr.length; i++) {
    e += "Element at " + i + " = " + arr[i] + "</br>";
  }
  document.getElementById("para").innerHTML = e;
}