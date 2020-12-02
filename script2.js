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

let inahSection = document.getElementById('inah');
let katherineSection = document.getElementById('katherine');
let veronicaSection = document.getElementById('veronica');
let meganSection = document.getElementById('megan');
let jsonData = [{"section": "inah", "comment1": "Woah so many donuts!! It's like food heaven 😍😆", "comment2": "Love your videos hula from Dubai"},
                {"section": "katherine", "comment1": "The Queen of big bite is back.", "comment2" : "Boki you never failed us to get hungry everytime you eat something."},
                {"section": "veronica", "comment1": "Day 13 of telling Stephanie that she is the best storyteller mukbanger biss ever", "comment2": "Stephanie is the only YouTuber I could listen to for hoursss"},
                {"section": "megan", "comment1": "Who else can’t stop watching his videos? ❤️", "comment2": "SIO is the only mukbang person I watch... You are truly so calming. Your videos relax me. ❤️🤗"},

  ]

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
function createElement(incomingJSON){
  for (let i = 0; i < incomingJSON.length; i++) {
      let newContentElement = document.createElement("DIV");
      newContentElement.classList.add('bubble');
      //create divs of the two comment bubbles
      let newComment1 = document.createElement("DIV");
      newComment1.classList.add("comment1s");
      newComment1.innerText = incomingJSON[i]["comment1"];
      newContentElement.appendChild(newComment1);

      let newComment2 = document.createElement("DIV");
      newComment2.classList.add("comment2s");
      newComment2.innerText = incomingJSON[i]["comment2"];
      newContentElement.appendChild(newComment2);

      if (incomingJSON[i]['section'] == 'inah'){
        inahSection.appendChild(newContentElement);
      }
      else if(incomingJSON[i]['section'] == 'katherine'){
        katherineSection.appendChild(newContentElement);
      }
      else if(incomingJSON[i]['section'] == 'veronica'){
        veronicaSection.appendChild(newContentElement);
      }
      else if
      (incomingJSON[i]['section'] == 'megan'){
        meganSection.appendChild(newContentElement);
      }
    }

  }
createElement(jsonData);
