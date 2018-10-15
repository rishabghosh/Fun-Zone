const voice = require("say");
const audio = require("play");
const narrator = "alex";
const message = "Boom";

const welcomeMsg1 = "Hello Everyone!";
const welcomeMsg2 = "It is a TIMEBOMB...";
const welcomeMsg3 = "Be careful when it explodes...";
const welcomeMsg4 = "Starting timer..";

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

const createMessage = function(msg, addDelay, delayAtBeginning, speed){
  multiplier += delayAtBeginning;

  setTimeout( () => console.log(msg), 1000 * multiplier + 300);
  setTimeout( () => voice.speak(msg, narrator, speed), 1000 * multiplier);

  multiplier += addDelay;
}

const createFinalMessage = function(){
  setTimeout( () => console.log(message), 1000 * multiplier);
  setTimeout( () => voice.speak(message , narrator, 0.5), 1000 * multiplier);
  multiplier += 1.5
  setTimeout( () => audio.sound("./boom.mp3"), 1000*multiplier);
}

const clearScreen = function(){
  multiplier += 7;
  setTimeout( () => console.clear(), 1000 * multiplier);
}

createMessage(welcomeMsg1, 3, 0, 1);
createMessage(welcomeMsg2, 3.5, 0, 1.1);
createMessage(welcomeMsg3, 4, 0, 1.2);
createMessage(welcomeMsg4, 2, 0, 1.2);

timer(10,5);
createMessage(pokeMessage1, 4, 3, 1);
createMessage(pokeMessage2, 2, 0, 1);
createMessage(pokeMessage3, 2, 0, 1);
timer(4,1);
createFinalMessage();
clearScreen();

multiplier += 1;
createMessage(conclude1, 2, 0, 1.3);
createMessage(conclude2, 2, 0, 1.1);
createMessage(conclude3, 2, 0, 1.2);

setTimeout( ()=> require("openurl").open("https://github.com/rishabghosh/"), 1000 * multiplier);
clearScreen();
//multiplier += 5;
//setTimeout( ()=> audio.sound("./despacito.mp3"), 1000*multiplier );
