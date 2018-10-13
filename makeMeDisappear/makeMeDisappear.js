const timer = function(countFrom, multiplier){
  for( let i = countFrom; i>= 1; i--){
    setTimeout( () => console.log(i+".."), 1000 * multiplier);
    multiplier++;
  }
  return multiplier;
}

const clearScreen = function(multiplier){
  setTimeout( () => {console.clear(); process.exit()}, 1000 * multiplier);
}
  
console.log("Make Me Disappear In ... ");
clearScreen( timer(3,1) );

