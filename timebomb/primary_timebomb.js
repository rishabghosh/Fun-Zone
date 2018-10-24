let mul = 1;
for(var i = 0; i < 5; i ++){
( (k)=>{
  setTimeout( ()=>console.log(k), 2000*mul);
 }
)(i);
mul ++;
}

