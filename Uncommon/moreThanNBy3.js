

function freqMoreThan(a){
  if(a.length < 1) return null;
  
  let target = Math.floor(a.length/3);
  let freq = {};
  
  for(let val of a){
    if(freq[val]) freq[val]++
    else freq[val] = 1;
  }
  
  for(let key in freq){
    if(freq[key] > target){
      return key;
    } else {
      return null;
    }
  }
  
}
	
console.log(freqMoreThan([1, 2, 3, 1, 1]));