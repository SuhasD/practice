function isUnique (str){
    if(str.length > 128) return false;
    
    let freq = {};
  
    for(let i=0; i< str.length; i++){
      if(freq[str[i]]) return false;
      else freq[str[i]] = 1;
    }
  
    return true;
  }
  
  console.log(isUnique('asrtd'));

  // o n2 -> check each element
  // sort, then check str[i] == str[i+1]