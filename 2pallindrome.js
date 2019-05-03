

function pallindrome(str){
  let rev = '';
  for(let character of str){
     rev = character + rev;
  }
  if(rev === str) return true;
  
  return false;
}

console.log(pallindrome('abba'));