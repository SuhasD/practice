function oneEditAway (s1, s2){
    if(s1.length === s2.length) return oneEditReplace(s1, s2);
    if(s1.length === s2.length - 1) return oneEditInsert(s1, s2);
    if(s1.length -1 === s2.length) return oneEditInsert(s2, s1);
    return false;
  }
  
  function oneEditReplace(s1, s2){
    let foundDifference = false;
    for(let i=0; i < s1.length; i++){
      if(s1[i] !== s2[i]){
        if(foundDifference) return false;
        else foundDifference = true;
      }
    }
    return true;
  }
  
  function oneEditInsert(s1, s2){
    let index1 = 0
    let index2 = 0;
  
    while(index1 < s1.length && index2 < s2.length){
      if(s1[index1] != s2[index2]){
        if(index1 != index2) return false;
        else index2++;
      }
      else {
        index1++;
        index2++;
      }
    }
    return true
  }
  
  console.log(oneEditAway('tle', 'pale'));