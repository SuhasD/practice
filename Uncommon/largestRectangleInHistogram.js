// We traverse all histograms from left to right, maintain a stack of histograms. 
// Every histogram is pushed to stack once.
// A histogram is popped from stack when a histogram of smaller height is seen. When a histogram is popped, we calculate the area with the popped histogram as smallest histogram. 

// How do we get left and right indexes of the popped histogram – the current index tells us the ‘right index’ R and index of previous item in stack is the ‘left index’ L. h 
 
 function largestRectangleArea(A){
        var S = new Array();
        
        var ans = 0;
        for (var i = 0; i < A.length; i++) {
            while (S.length > 0 && A[i] < A[S[S.length-1]]) {
                var min_height = A[S.pop()];
                
                var end = i;
                var start = S.length > 0 ? (S[S.length-1] + 1) : 0;
                var area = min_height * (end - start);
                
                ans = Math.max(ans, area);
            }
            
            S.push(i);
        }
        
        while (S.length > 0) {
            var min_height = A[S.pop()];
            
            var end = A.length;
            var start = S.length > 0 ? (S[S.length-1] + 1) : 0;
            var area = min_height * (end - start);
            
            ans = Math.max(ans, area);
        }
        
        return ans;
    }
	console.log(largestRectangleArea([2,1,5,6,2,3]))