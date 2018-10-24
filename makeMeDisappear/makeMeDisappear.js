const timer = function(countFrom, multiplier){
  
  for( let i = countFrom; i>= 1; i--){
    let delay = 1000 * multiplier;
    setTimeout( () => console.log(i+".."), delay);
    multiplier++;
  }
  return multiplier;
}

const clearScreen = function(multiplier){
  setTimeout( () => {console.clear(); process.exit()}, 1000 * multiplier);
}
  
console.log("Make Me Disappear In ... ");
clearScreen( timer(3,1) );

