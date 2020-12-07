var modal6 = document.getElementById("tzuyangModal");
var modal7 = document.getElementById("katherineModal");
var modal8 = document.getElementById("veronicaModal");
var modal9 = document.getElementById("meganModal");
var modal10 = document.getElementById("erikModal");
var btn6 = document.getElementById("play6");
var btn7 = document.getElementById("play7");
var btn8 = document.getElementById("play8");
var btn9 = document.getElementById("play9");
var btn10 = document.getElementById("play10");

let tzuyangSection = document.getElementById('tzuyang');
let katherineSection = document.getElementById('katherine');
let veronicaSection = document.getElementById('veronica');
let meganSection = document.getElementById('megan');
let erikSection = document.getElementById('erik');
let jsonData = [{"section": "tzuyang", "comment1": "These are the channels I watched and laughed a lot over, but now I feel so upset and regretful", "comment2": "I'm so disappointed",
                "comment3": "I feel deceived that you have been lying to your fans. I will never watch your videos again.", "comment4":"It is important to let the viewers know when they are watching a video based on advertisements." },
                {"section": "katherine", "comment1": "it sounds more like a sex video than a food eating video if you literally just listen to the audio ", "comment2" : "Hey katherine rose i really love watching you in your channel your so beautiful can i have your facebook?",
                "comment3": "You give a dinner idea for tomorrow Katie, & just to watch just munch, & sexy-eater!", "comment4": "Hey Katy rose you look attractive with your purple sweater  I'd like your makeup and your tail of your blonde hair I'd like attractive American girl like you"},
                {"section": "veronica", "comment1": "I think I'm sick, when I'm on diet, I watch mukbangs, I feel like watching people eat makes me fuller, its as if they're eating instead of me 😪", "comment2": "it kinda helps with food cravings. but at the same time i crave more",
                "comment3": "🤢 I HATE mouth noises, and talking with your mouth full, so gross..and rude. At least that's how I was raised.", "comment4": "I don’t mind her chewing with her mouth open but when she smacks her lips I want to die"},
                {"section": "megan", "comment1": "I hate that she can eat EVERYTHING and not get fat =_='", "comment2": "Omg you eat whatever you want and ur so fit. I breathe and i gain 10 pounds 😂",
                "comment3": "I wish I could be like her; can eat as much as I like/want, but can stay slim...", "comment4": "Aren't you scared your blood sugar will go up? And then have diabetes?!!"},
                {"section": "erik", "comment1": "Why we not talking about how he went on a 32 mile run a 50 mile bike ride and ate 35,000+ calories in one day", "comment2": "oh man, not again !! brace for impact...its cheaters day again - eriks stomach",
                "comment3": "Why would someone do this to himself", "comment4": "Dude you did 1.2 marathons in 4.5 hours, thats insane"},

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

      if (incomingJSON[i]['section'] == 'tzuyang'){
        tzuyangSection.appendChild(newContentElement);
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
      (incomingJSON[i]['section'] == 'erik'){
        erikSection.appendChild(newContentElement);
      }
    }

  }
createElement(jsonData);
