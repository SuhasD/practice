function isStrRotation(s1, s2){
    if(s1.length !== s2.length || !s1.length) return false;
  
    let s1s1 = s1 + s1;
    return s1s1.includes(s2);
  }
  
  console.log(isStrRotation('erbottlewat','waterbottle'))