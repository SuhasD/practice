function isUnique (str){
    if(str.length > 128) return false;
    
    let freq = {};
  
    for(let i=0; i< str.length; i++){
      if(freq[str[i]]) freq[str[i]]++;
      else freq[str[i]] = 1;
    }
  
    for(let key in freq){
      if(freq[key] > 1) return false;
    }
  
    return true;
  }
  
  console.log(isUnique('asrtd'));