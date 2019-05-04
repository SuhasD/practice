

function anagrams(first, second){

  if(first.length != second.length){
    return false;
  }
  
  var freq = {};
  
  for(let char of first){
    if(freq[char]){freq[char] ++;}
    else freq[char] = 1;
  }
  
  for(let key of second){
    if(freq[key]){
      freq[key]--;
    } else{
      return false;
    }
  }
  return true;
}

console.log(anagrams('rail', 'liar'));