var modal1 = document.getElementById("yukaModal");
var modal2 = document.getElementById("bokiModal");
var modal3 = document.getElementById("stephModal");
var modal4 = document.getElementById("sioModal");
var modal5 = document.getElementById("hamzyModal");
var btn1 = document.getElementById("play1");
var btn2 = document.getElementById("play2");
var btn3 = document.getElementById("play3");
var btn4 = document.getElementById("play4");
var btn5 = document.getElementById("play5");
let yukaSection = document.getElementById('yuka');
let bokiSection = document.getElementById('boki');
let stephSection = document.getElementById('steph');
let sioSection = document.getElementById('sio');
let hamzySection = document.getElementById('hamzy');
let jsonData = [{"section": "yuka", "comment1": "Woah so many donuts!! It's like food heaven 😍😆", "comment2": "Love your videos hula from Dubai",
                "comment3": "me watching this at 3AM :’)", "comment4":"I’m just watching cuz I’m on diet😭😭😭"},
                {"section": "boki", "comment1": "The Queen of big bite is back.", "comment2" : "Boki you never failed us to get hungry everytime you eat something.",
                "comment3": "Never have I been more hungry watching something", "comment4":"My favorit youtuber mukbang 💞💞"},
                {"section": "steph", "comment1": "Day 13 of telling Stephanie that she is the best storyteller mukbanger biss ever", "comment2": "Stephanie is the only YouTuber I could listen to for hoursss",
                "comment3": "day twenty four of telling stephanie she’s the cutest little muffin", "comment4":"From Vietnam, with love!"},
                {"section": "sio", "comment1": "Who else can’t stop watching his videos? ❤️", "comment2": "SIO is the only mukbang person I watch... You are truly so calming. Your videos relax me. ❤️🤗",
                "comment3": "Who is watching this during quarantine and is starting to starve", "comment4":"You can tell how much he appreciates his food by his facial expressions after taking bites. So cute."},
                {"section": "hamzy", "comment1": "Who never skips her cooking part 🍳🍳🔪👩‍🍳 Me👍👇", "comment2": "I like the fact that you cook yourself to eat, it makes everything more realistic🥰",
                "comment3": "I like you because you eat so many different things.🍣🍔🌭🥙🍠🍗🍜", "comment4":"why do i love these COOKING COMPILATIONS so muchhhhh!"},
  ]

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
btn5.onclick = function() {
  modal5.style.display = "block";
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
  else if(event.target == modal5) {
    modal5.style.display = "none";
    window.location = "index.html";
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

      if (incomingJSON[i]['section'] == 'boki'){
        bokiSection.appendChild(newContentElement);
      }
      else if(incomingJSON[i]['section'] == 'yuka'){
        yukaSection.appendChild(newContentElement);
      }
      else if(incomingJSON[i]['section'] == 'steph'){
        stephSection.appendChild(newContentElement);
      }
      else if
      (incomingJSON[i]['section'] == 'sio'){
        sioSection.appendChild(newContentElement);
      }
      else if
      (incomingJSON[i]['section'] == 'hamzy'){
        hamzySection.appendChild(newContentElement);
      }
    }

  }
createElement(jsonData);
