


function intReverse(num){
  var reveresed = num.toString().split('').reverse().join('');
  return parseInt(reveresed) * Math.sign(num);
}

console.log(intReverse(-51));