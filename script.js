var modal1 = document.getElementById("yukaModal");
var modal2 = document.getElementById("bokiModal");
var modal3 = document.getElementById("stephModal");
var modal4 = document.getElementById("sioModal");
var btn1 = document.getElementById("play1");
var btn2 = document.getElementById("play2");
var btn3 = document.getElementById("play3");
var btn4 = document.getElementById("play4");
// Get the button that opens the modal
var btn = document.getElementById("playL");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal

btn1.onclick = function() {
  modal1.style.display = "block";
}
btn2.onclick = function() {
  modal2.style.display = "block";
}
btn3.onclick = function() {
  modal3.style.display = "block";
}
btn4.onclick = function() {
  modal4.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
     window.location = "index.html";
  }
  else if (event.target == modal2) {
    modal2.style.display = "none";
     window.location = "index.html";
  }
  else if (event.target == modal3) {
    modal3.style.display = "none";
    window.location = "index.html";
  }
  else if(event.target == modal4) {
    modal4.style.display = "none";
    window.location = "index.html";
  }
}
