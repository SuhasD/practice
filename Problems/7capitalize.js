function capitalize(line){
  var line = line.split(" ");
  var res = '';
  for(let word of line){
    const first = word[0].toUpperCase();
    res += first+word.slice(1)+" ";
  }
  return res;
  
  //Approach 2
  var result = line[0].toUpperCase();
  
  for(let i=1; i<line.length;i++){
    if(line[i-1] === ' '){
      result += line[i].toUpperCase();
    } else{
      result += line[i];
    }
  }
  
  return result;
  
}

console.log(capitalize('rail has a track'));