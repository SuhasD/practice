

// Loop all the way upto 'n' and determine if 
function isPrime(n) {
 // Base cases 
 if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }
  else{
	  for(var i = 2; i < n; i++){
	    if(n % i === 0) return false;
	  }
  }
  return true;
}


// Approach 2
// Decreased time complexity by looping only till square root of 'n'
function isPrime(n) {

 // Base cases 
 if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }
  else{
   		for(let i = 2, s = Math.sqrt(n); i <= s; i++)
        	if(n % i === 0) return false; 
	  }
  return true;
}


// Approach 3
// Using Recursion 
function isPrime(n, i = 2) 
{ 
    // Base cases 
    // Added ternary operations rather than if else
    if (n <= 2) 
        return (n == 2) ? true : false; 
    if (n % i == 0) 
        return false; 
    if (i * i > n) 
        return true; 
  
    // Increment and Check for next divisor 
    return isPrime(n, i + 1); 
} 
