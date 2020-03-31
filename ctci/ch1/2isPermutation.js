function isPermutation (str1, str2){
    if(str2.length !== str2.length) return false;
  
    let freq = {};
  
    for(let i=0; i< str1.length; i++){
      if(freq[str1[i]]) freq[str1[i]]++;
      else freq[str1[i]] = 1;
    }
  
    for(let i=0; i< str2.length; i++){
      if(freq[str2[i]]) freq[str2[i]] --;
      else return false;
    }
  
    return true;
    
    // Approach 2
    // return str1.split('').sort().join('') === str2.split('').sort().join('')
  }
  
  console.log(isPermutation('asr', 'ars'));