function stairs(n){

  for(let row = 0; row < n; row++){
    const step = '';
    
    for(let column = 0; column < n; column++){
      if(column <= row) step += '#' 
      else step += ' ';
    }
    console.log(step);
  }
  
}

stairs(5);

//Approach 2
function stairs(n, row = 0, stair = ''){

  if(n === 0){return;}
  
  if(n === stair.length){
    console.log(stair);
    return stairs(n, row + 1);
  }
  
  if(stair.length <= row){
    stair += '#';
  } else {
    stair += ' ';
  }
  
  stairs(n, row, stair);
  
}

stairs(5);


