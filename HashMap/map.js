


let m = new Map();

//Adding elements in map
//var a=document.getElementById("buttonAdd");
function addValue() {
  console.log(1);
  var k=prompt("key=");
  var v=prompt("value=");
  if(m.set(k, v))
  { 
      alert("key " + k + " and value " + v + " pair added in map");
  } 
  else {
    alert("key " + k + " and value " + v + " pair not added in map");
  }

}



//deleting key-value pair in map
function deleteValue() {
  var d=prompt("Enter key to be deleted?");
  if(m.delete(d))
  {
       alert("key " + k + " and value " + v " pair deleted in map");
  } 
  else {
    alert("key " + k + " and value " + v + " pair not found in map");
  }
  display();
  }


//searching key-value pair in map
function searchValue() {
  var s=prompt("Enter key to be searched?");
  if (m.has(s)) {
    alert("key " + k + " and value " + v+" pair found in map");
  } else {
    alert("key " + k + " and value " + v + " pair not found in map");
  }
}

//display all pairs of map
/*function display() {
  var e = "</br>";
  for (var [key, value] of m.entries()) {
    e += key + " " + value + "</br>";
  }
  document.getElementById("para").innerHTML = e;
}*/

//clear all
function clearValue() {
    if(m.clear())
    {
         alert("cleared");
  } 
  else {
    alert("already cleared");
  }

    }













