
// Maintain a carry which is initialized to 1 ( Denoting that we need to add one to the number ). 
// Run a loop on the digit array ( which is now reversed ), and add carry to the current digit. 
//If the digit D exceeds 10 on doing so, store the last digit in current position ( D % 10 ), and make carry = rest of the digits ( D / 10 ).
// Continue the process till you have covered all the digits. 
// Now if at the end, carry = 0, we are done, and we can return the array.
//If not, we need to add one more digit, with carry in it.

function addOne(A){
   var hasExtra = true;
    
    for(var i = A.length -1; i >= 0 ; i--) {
        if(!hasExtra)
            break;
        
        A[i] = (A[i] + 1)%10;
        hasExtra = false;
        
        if(A[i] == 0) {
            hasExtra = true;
        }
    }

    if(hasExtra) {
     A.unshift(1);
    }
    
    while(A[0] == 0) {
        A.shift();
    }
   
   return A;
}
	
console.log(addOne([1,9,9]))