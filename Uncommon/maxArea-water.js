// When you consider a1 and aN, then the area is (N-1) * min(a1, aN).
// The base (N-1) is the maximum possible.
// This implies that if there was a better solution possible, it will definitely have height greater than min(a1, aN).


// B * H > (N-1) * min(a1, aN)
// We know that, B < (N-1)
// So, H > min(a1, aN)

// This means that we can discard min(a1, aN) from our set and look to solve this problem again from the start. 
// If a1 < aN, then the problem reduces to solving the same thing for a2, aN. 
// Else, it reduces to solving the same thing for a1, aN-1
  
 function maxArea(A){
        var l=0, r=A.length-1;
        var max = (r-l) * Math.min(A[l], A[r]);
        
        while (l < r){
            if (A[l] <= A[r]) l++;
            else r--;
            if ((r-l) * Math.min(A[l], A[r]) > max)
            max = (r-l) * Math.min(A[l], A[r]);
        }
        
        return max;
	}
	
	console.log(maxArea([1, 2, 2, 2, 3, 3, 4, 4, 5]))