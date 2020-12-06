var left = document.getElementById("before");
left.onclick = function(){
  window.location = "index.html";
}

var more = document.getElementById("abtImg");
more.onclick = function(){
  window.location = "about.html";
}


var modal6 = document.getElementById("inahModal");
var modal7 = document.getElementById("katherineModal");
var modal8 = document.getElementById("veronicaModal");
var modal9 = document.getElementById("meganModal");
var modal10 = document.getElementById("chuModal");
var btn6 = document.getElementById("play6");
var btn7 = document.getElementById("play7");
var btn8 = document.getElementById("play8");
var btn9 = document.getElementById("play9");
var btn10 = document.getElementById("play10");

let inahSection = document.getElementById('inah');
let katherineSection = document.getElementById('katherine');
let veronicaSection = document.getElementById('veronica');
let meganSection = document.getElementById('megan');
let chuSection = document.getElementById('chu');
let jsonData = [{"section": "inah", "comment1": "🤢 I HATE mouth noises, and talking with your mouth full, so gross..and rude. At least that's how I was raised.", "comment2": "I wish I can eat a lot and be as skinny as you tell me the secret please 😭🥳",
                "comment3": "the sounds you make 🤤🤤", "comment4": "I would love to *am you so hard"},
                {"section": "katherine", "comment1": "Maybe mcgangb*ng by the looks of it", "comment2" : "Hey katherine rose i really love watching you in your channel your so beautiful can i have your facebook?",
                "comment3": "You give a dinner idea for tomorrow Katie, & just to watch just munch, & sexy-eater!", "comment4": "Hey Katy rose you look attractive with your purple sweater  I'd like your makeup and your tail of your blonde hair I'd like attractive American girl like you"},
                {"section": "veronica", "comment1": "Day 13 of telling Stephanie that she is the best storyteller mukbanger biss ever", "comment2": "Stephanie is the only YouTuber I could listen to for hoursss",
                "comment3": "", "comment4": ""},
                {"section": "megan", "comment1": "", "comment2": "",
                "comment3": "", "comment4": ""},
                {"section": "chu", "comment1": "Why did you edit out some of your chewing parts??", "comment2": "",
                "comment3": "", "comment4": ""},

  ]

btn6.onclick = function() {
  modal6.style.display = "block";
}
btn7.onclick = function() {
  modal7.style.display = "block";
}
btn8.onclick = function() {
  modal8.style.display = "block";
}
btn9.onclick = function() {
  modal9.style.display = "block";
}
btn10.onclick = function() {
  modal10.style.display = "block";
}

window.onclick = function(event) {
  if(event.target == modal6) {
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
  else if(event.target == modal9) {
    modal9.style.display = "none";
    window.location = "back.html";
  }
  else if(event.target == modal10) {
    modal10.style.display = "none";
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

      let newComment3 = document.createElement("DIV");
      newComment3.classList.add("comment3s");
      newComment3.innerText = incomingJSON[i]["comment3"];
      newContentElement.appendChild(newComment3);

      let newComment4 = document.createElement("DIV");
      newComment4.classList.add("comment4s");
      newComment4.innerText = incomingJSON[i]["comment4"];
      newContentElement.appendChild(newComment4);

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
      else if
      (incomingJSON[i]['section'] == 'chu'){
        chuSection.appendChild(newContentElement);
      }
    }

  }
createElement(jsonData);
