function isPalindromePermutation (str){
    if(!str) return false;
    str = str.toLowerCase();
    
    let freq = {};
  
    for(let item of str){
      if(item != ' '){
        if(freq[item]) freq[item] --;
        else freq[item] = 1;
      }
    }
  
    for(let key in freq){
      if(freq[key] == 0) delete freq[key];
      // only one occurrence of "middle" character between palindrome chars
      if(freq[key] > 1) return false;
    }
    return Object.keys(freq).length <= 1;
  }
  
  console.log(isPalindromePermutation('Taco cat'));