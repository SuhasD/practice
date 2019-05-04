


function intReverse(num){
  var reveresed = num.toString().split('').reverse().join('');

  //Approach 1  
  // if(num < 0) return parseInt(reveresed) * -1;
  // return parseInt(reveresed);

  //Approach 2
  return parseInt(reveresed) * Math.sign(num);
}

console.log(intReverse(-51));