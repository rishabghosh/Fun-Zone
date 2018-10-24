let displayCs = 0;
let displaySec = 0;
let displayMin = 0;
let displayHours = 0;


setInterval( function(){

  displayCs ++;
  if(displayCs >= 99){
    displayCs = 0;
  }

}, 9 );


setInterval( function(){
  displaySec ++;

  if(displaySec >=60){
    displayMin ++;
    displaySec = 0;
    if(displayMin >= 59){
      displayHours ++;
      displayMin = 0;
    }
  }

}, 997);


setInterval( function(){

  console.clear();
  console.log('',displayHours,':', displayMin,':',displaySec + "." + displayCs);

}, 50);



