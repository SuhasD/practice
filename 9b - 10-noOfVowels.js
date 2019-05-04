function noOfvowels(str){
  let count = 0;
  const vowels = ["a","e","i","o","u"];
  
  for(let letter of str.toLowerCase()){
    if(vowels.includes(letter)){
      count++;
    }
  }
  return count;
  
  //Approach 2 RegExp
  // g -> dont stop at forst occurrence 
  // i -> Case "Insensitive"  
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}
console.log(noOfvowels("Hey whats up?"));