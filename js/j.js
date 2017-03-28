// From: http://opensourceaugie.com/js/texttype.js
function texttype(targetDiv, text, intervalStart, intervalRange, callback) {
  var textTyperID = ++window.textTyperID;

  window.textTyper[textTyperID] = new function() {
    var textFinished = false;
    this.init = function() {
      var innerString = "";
      for(var i = 0; i < text.length; i++){
        innerString+="<span style='display:none;'>"+text[i]+"</span>"
      }

      var pipe = document.createElement('span');
      pipe.setAttribute('id', "pipe"+textTyperID);
      pipe.textContent = '|';
      pipe.style.marginLeft = '1px';
      document.getElementById(targetDiv).innerHTML = innerString;
      document.getElementById(targetDiv).appendChild(pipe);
      window.textTyper[textTyperID].type(0);
      window.textTyper[textTyperID].animatePipe(true);
    }
    this.type = function(i){
      var target = document.getElementById(targetDiv).childNodes;
      if(i < text.length){
        var to = intervalStart - (intervalRange/2);
        var from = intervalStart + (intervalRange/2);
        var interval = Math.floor(Math.random() * (to-from+1) + from);
        target[i].style.display = 'inline';
        setTimeout(function() {
          window.textTyper[textTyperID].type(++i);
          document.getElementById("pipe" + textTyperID).style.visibility = '';
        }, interval);
      }
      else{
        setTimeout(function(){
          textFinished = true;
        },3000);
        if(callback)
          callback();
      }
    }

    this.animatePipe = function(visible, timer) {
      if(!visible)
        document.getElementById("pipe"+textTyperID).style.visibility = 'hidden';
      else
        document.getElementById("pipe"+textTyperID).style.visibility = '';

      if(!textFinished){
        setTimeout(function(){
          window.textTyper[textTyperID].animatePipe(!visible);
        }, 500);
      }
      else
        document.getElementById("pipe"+textTyperID).style.visibility = 'hidden';
    }
  };

  window.textTyper[textTyperID].init();
}

(function() {
  window.textTyperID = 0;
  window.textTyper = new Array();
}
)();

function setDougResponse() {
  var responses = [
    "No, of course not.",
    "Fuck no.",
    "Ummm... No.",
    "I liked it better before.",
    "That's bullshit.",
    "I don't give a shit.",
    "I am losing the ability to tell when you guys are joking on this stuff.",
    "Fuck it.",
    "Sigh.",
    "It's for hipsters.",
    "No, you're wrong.",
    "That looks awful.",
    "Yeah, if you're a moron.",
    "Oh, I thought I was speaking to adults...",
    "If it's new, you like it. God damn hipster.",
    "It's ruined.",
    "That's unusable.",
    "Only a child would like that.",
    "That really sounds like something I don't give a shit about.",
    "No.",
    "It's good if you like things that suck.",
    "I'm having an internal debate with myself as to whether to accept this constraint as a given or melt down in a fire of ridiculousness.",
    "Nine levels of my brain just seg-faulted at once.",
    "Fuck me with a chainsaw.",
    "I just want something usable."
  ]

  texttype("text-div", responses[Math.floor(Math.random() * responses.length)], 100, 100);
}

document.addEventListener("DOMContentLoaded", function(event) {
  setDougResponse();
});
