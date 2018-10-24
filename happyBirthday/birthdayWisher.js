const voice = require("say");
const audio = require("play");
const narrator = "alex";
const candidate = "abcd";

const welcomeMsg0 = "Hello Everyone!";
const welcomeMsg1 = "Do you know it is " +  candidate + "'s birthday today.";
const welcomeMsg2 = "lets wish her birthday.";
const welcomeMsg3 = "count with me.";

const message = "Happy Birthday " + candidate;

const pokeMessage1 = "Unexpected Error Occurred!";
const pokeMessage2 = "Just kidding.";
const pokeMessage3 = "Resuming counting...";
const conclude1 = "If you want to look at the code."
const conclude2 = "Follow me on github"
const conclude3 = "Redirecting to github"

let multiplier = 1;

const timer = function(countFrom, countTo){
  for(let count = countFrom; count >= countTo; count --){

    setTimeout( () => console.clear(), 1000 * multiplier - 10);
    setTimeout( function() { console.log(count + "..") }, 1000 * multiplier);
    setTimeout( () => voice.speak( count, narrator, 1.2), 1000 * multiplier);
    multiplier ++;
  }
}

const generateMsg = function(msg, addDelay, delayAtBeginning, speed){
  multiplier += delayAtBeginning;

  setTimeout( () => console.log(msg), 1000 * multiplier + 300);
  setTimeout( () => voice.speak(msg, narrator, speed), 1000 * multiplier);

  multiplier += addDelay;
}

const createFinalMessage = function(){
  setTimeout( () => console.log(message), 1000 * multiplier);
  setTimeout( () => voice.speak(message , narrator, 0.8), 1000 * multiplier);
  multiplier += 1.7
  setTimeout( () => audio.sound("./hbd.mp3"), 1000*multiplier);
}

const exit = function(){
  multiplier += 2;
  setTimeout( () => console.clear(), 1000 * multiplier);
}

generateMsg(welcomeMsg0, 2, 0, 0.8);
generateMsg(welcomeMsg1, 3.5,0, 1);
generateMsg(welcomeMsg2, 3,0, 1);
generateMsg(welcomeMsg3, 3,0, 1);

timer(10,5);

//generateMsg(pokeMessage1, 4, 3, 1);
//generateMsg(pokeMessage2, 2, 0, 1);
//generateMsg(pokeMessage3, 2, 0, 1);

timer(4,1);

createFinalMessage();
exit();
setTimeout( ()=> console.log("Sing With Me..."), 1000 * multiplier);

multiplier += 60;
generateMsg(conclude1, 2, 0, 1);
generateMsg(conclude2, 2, 0, 1);
generateMsg(conclude3, 2, 0, 1);

setTimeout( ()=> require("openurl").open("https://github.com/rishabghosh/"), 1000 * multiplier);

