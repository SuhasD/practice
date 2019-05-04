

function maxChar(str){
  var freq = {}, maxVal = 0, maxChar = '';
  
  for(let key of str){
    if(freq[key]){
      freq[key]++;
      if(freq[key] > maxVal){
        maxVal = freq[key];
        maxChar = key;
      }
    }
    else {freq[key] = 1;}
  }
  // console.log(freq);
  return maxChar;
}

console.log(maxChar("Cccccasd2222"));