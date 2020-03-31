function compressStr (str){
    if (!str || str.length <= 2) return str;
    
    let compressed = '';
    let count = 0;
  
    for(let i=0; i< str.length; i++){
      count ++;
      if(str[i] != str[i+1]){
        compressed += str[i] + count;
        count = 0;
      }
    }
    return compressed.length <= str.length ? compressed : str;
}
  
console.log(compressStr('aaasrrttttttAAAAaaaattt'));

// approach 2 -> regex
// approach 3 -> freq map