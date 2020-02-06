var name1 = document.getElementById("name1");
var email = document.getElementById("email");
var place = document.getElementById("place");
var number = document.getElementById("number");

function display() {
  console.log("-------------details-------------");
  console.log("name= " + name1.value);
  console.log("email= " + email.value);
  console.log("place= " + place.value);
  console.log("number= " + number.value);
}

function rearrange() {
  var name = (document.getElementById("name1").value = "");
  var email = (document.getElementById("email").value = "");
  var place = (document.getElementById("place").value = "");
  var number = (document.getElementById("number").value = "");
  console.log("reset complete");
}

var flag = true;
function disable() {
  var name = document.getElementById("name1");
  var email = document.getElementById("email");
  var place = document.getElementById("place");
  var number = document.getElementById("number");
  var button = document.getElementById("b3");
  if (flag) {
    name.disabled = true;
    email.disabled = true;
    place.disabled = true;
    number.disabled = true;
    flag = false;
    button.innerText = "Enable";
    button.style.backgroundColor = "green";
    button.style.color = "white";
  } else {
    name.disabled = false;
    email.disabled = false;
    place.disabled = false;
    number.disabled = false;
    flag = true;
    button.innerText = "Disable";
    button.style.backgroundColor = "red";
    button.style.color = "white";
  }
}
