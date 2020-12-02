var left = document.getElementById("before");
left.onclick = function(){
  location.replace("index.html");
}

var modal5 = document.getElementById("inahModal");
var modal6 = document.getElementById("katherineModal");
var modal7 = document.getElementById("veronicaModal");
var modal8 = document.getElementById("meganModal");
var btn5 = document.getElementById("play5");
var btn6 = document.getElementById("play6");
var btn7 = document.getElementById("play7");
var btn8 = document.getElementById("play8");

btn5.onclick = function() {
  modal5.style.display = "block";
}
btn6.onclick = function() {
  modal6.style.display = "block";
}
btn7.onclick = function() {
  modal7.style.display = "block";
}
btn8.onclick = function() {
  modal8.style.display = "block";
}

window.onclick = function(event) {
  if(event.target == modal5) {
    modal5.style.display = "none";
    window.location = "back.html";
  }
  else if(event.target == modal6) {
    modal6.style.display = "none";
    window.location = "back.html";
  }
  else if(event.target == modal7) {
    modal7.style.display = "none";
    window.location = "back.html";
  }
  else if(event.target == modal8) {
    modal8.style.display = "none";
    window.location = "back.html";
  }
}
