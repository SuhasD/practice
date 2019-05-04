
function fib(n){
  //Approach 1 - recursive
  if(n < 2){return n}
  else return fib(n-1) + fib(n-2);
  
  //Approach 2 - iterative
  let result = [0,1];
  for(let i=2; i <= n; i++){
    let a = result[i-1];
    let b = result[i-2];
    result.push(a+b);
  }
  return result[n];
}

console.log(fib(9));

