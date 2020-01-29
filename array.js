var key = document.getElementById("sb");

//Adding elemennts in array
//var add = document.getElementById("buttonAdd");
var arr = new Array();
var x = 0;
function addValue() {
  arr[x] = key.value;
  x++;
  //arr.push(key.value);
  alert("Element added in array " + key.value);
  display();
}
//add.actionListener("click", addValue);

//Deleting elements of array
//var del = document.getElementById("buttonDelete");
function deleteValue() {
  arr.splice(arr.indexOf(key.value), 1);
  alert("deleted element " + key.value);
  display();
}
//del.actionListener("click3", deleteValue);

//Searching elements in array
//var search = document.getElementById("buttonSearch");
function searchValue() {
  if (arr.indexOf(key.value) == -1) {
    alert(key.value + " not found");
  } else {
    alert(key.value + " found at " + arr.indexOf(key.value) + " position");
  }
}
//search.actionListener("click4", searchValue);
function display() {
  var e = "</hr>";
  for (var i = 0; i < arr.length; i++) {
    e += "Element at " + i + " = " + arr[i] + "</br>";
  }
  document.getElementById("para").innerHTML = e;
}
