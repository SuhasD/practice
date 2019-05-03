

function reverseStr(str){
  //Approach 1
  return str.split('').reverse().join('');
  
  //Approach 2
  let rev = '';
  for(let character of str){
     console.log();
     rev = character + rev;
  }
  return rev;

  //Approach 3
  return str.split('').reduce((rev, char) => {
    return char + rev;
  }, '');
}

console.log(reverseStr('jesus'));