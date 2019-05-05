// Lets say g is gcd(m, n) and m > n.

// m = g * m1
// n = g * m2

// m - n = g * (m1 - m2)

// gcd (m, n) = gcd(m-n, n)

//           = gcd(m - 2n, n) if m >= 2n
//           = gcd(m - 3n, n) if m >= 3n 
//             .
//             .
//             .
//           = gcd(m - k*n, n) if m >= k*n
           
//       In other words, we keep subtracting n till the result is greater than 0. Ultimately we will end up with m % n.
       
//               So gcd(m, n)  = gcd(m % n, n) 


//Approach 1
function gcd(a, b){
        return !b ? a : gcd( b, a%b );
}


//Approach 2
 function gcd(A, B) {
	    
	    var gcdRecursive = function(m, n) {
	        if (n == 0) {
                return m;
	        } else {
                return gcdRecursive(n, m % n);
	        }
	    };
	    
	    if(A ==0 && B == 0) {
	        return 0;
	    }
	    
	    if(A == 0)
	       return B;
	    
	    if(B == 0)
	       return A;
	    
	    return gcdRecursive(A, B);

	}
	
console.log(gcd(6,12));

