

function pyramid(n){
  const midpoint = (2*n - 1);
  
  for(let row = 0; row < n; row++){
    let step = '';
    
    for(let column = 0; column < midpoint; column++){
      if(column >= midpoint - row && column <= midpoint + row){
        step += "#"
      } else {
        step += " ";
      }
    }
    
    console.log(step);
    
  }
}
pyramid(6);