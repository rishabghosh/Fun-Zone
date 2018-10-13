const voice = require("say");
const audio = require("play");
const narrator = "alex";
const message = "Boom";
const pokeMessage1 = "Unexpected Error Occurred!";
const pokeMessage2 = "Just kidding.";
const pokeMessage3 = "Resuming counting...";
let multiplier = 1;

const timer = function(countFrom, countTo){
  for(let count = countFrom; count >= countTo; count --){

    setTimeout( () => console.clear(), 1000 * multiplier - 10);
    setTimeout( function() { console.log(count + "..") }, 1000 * multiplier);
    setTimeout( () => voice.speak( count, narrator, 1.2), 1000 * multiplier);
    multiplier ++;
  }
}

const pokeInMiddle = function(msg, addDelay, delayAtBeginning){
  multiplier += delayAtBeginning;

  setTimeout( () => console.log(msg), 1000 * multiplier + 300);
  setTimeout( () => voice.speak(msg, narrator, 1), 1000 * multiplier);

  multiplier += addDelay;
}

const createFinalMessage = function(){
  setTimeout( () => console.log(message), 1000 * multiplier);
  setTimeout( () => voice.speak(message , narrator, 0.5), 1000 * multiplier);
  multiplier += 1.5
  //setTimeout( () => audio.sound("./despacito.mp3"), 1000*multiplier);
}

const exit = function(){
  multiplier += 2;
  setTimeout( () => console.clear(), 1000 * multiplier);
  //setTimeout( () => process.exit(), 1000 * multiplier + 10);
}

timer(10,5);
pokeInMiddle(pokeMessage1, 4, 3);
pokeInMiddle(pokeMessage2, 2, 0);
pokeInMiddle(pokeMessage3, 2, 0);
timer(4,1);
createFinalMessage();
exit();

