  // Given 2 sorted arrays, find all the elements which occur in both the arrays.
  // We can apply binary search to find out if an element of A exist in B. 
  // Time - O(m*lg(n)).
  
  
  function intersect(A, B) {
      var results = []
    
      // pointers at the start of both arrays
      var i = 0;
      var j = 0;
      
      // while both pointers are NOT at the end
      while (i < A.length && j < B.length) {
        // if A[i] = B[j] then add it to the results array
        if (A[i] === B[j]) {
          results.push(A[i]);
          i++;
          j++;
        } else if (A[i] > B[j]) {
          j++;
        } else {
          i++;
        }
      }
    
      return results;
    }
	
	console.log(intersect([1, 2, 2, 2, 3, 3, 4, 4, 5], [3, 5]))