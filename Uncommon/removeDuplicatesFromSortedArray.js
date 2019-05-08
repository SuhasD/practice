// maintaining 2 pointers in the array: **
// One pointer iterates over the array and
// Other pointer only moves per occurrence of a value in the array. 
// So, the second pointer only moves when A[i] != A[i+1]
 
 function removeDuplicates(A){
	   if(A.length < 1) return null;
	   let prev = A[A.length - 1];
	   
	   for(let i = A.length - 2; i>=0; i--){
	     //console.log(prev, A[i])
	     if(A[i] == prev){
	       A.splice(i, 1);
	     } else {
	       prev = A[i];
	     }
	   }
	   return A;
	}
	
	console.log(removeDuplicates([1, 2, 2, 2, 3, 3, 4, 4, 5]))