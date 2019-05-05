// while sorting the array we must also store the original index of the values.
// Now iterate over every element in the sorted array as A[i].
// Let us say index[i] stores the actual index of A[i].
// Now, we are looking for all values of A[j] which are bigger than A[i].
// Since the array is sorted, the values will be all the elements to the right of A[i].
// Since we want to maximize index[j] - index[i], and index[i] is fixed, 
// we are essentially looking at max index[j] for all j > i.


function maxGap(A){
          if (A.length <= 1) return 0;
        
          var arrI = [A[0]];
          for(var i = 1; i < A.length; i++) {
            arrI.push(Math.min(arrI[i - 1], A[i]));
          }
        
          var arrJ = new Array(A.length);
          arrJ[A.length - 1] = A[A.length - 1];
        
          for(var i = A.length - 2; i >= 0; i--) {
            arrJ[i] = Math.max(arrJ[i + 1], A[i]);
          }
        
          var max = 0;
          var j = 0;
          var i = 0;
          while(i < A.length && j < A.length) {
            if (arrI[i] <= arrJ[j]) {
              max = Math.max(j - i, max);
              j++;
            }
            else {
              i++;
            }
          }
        
          return max;
}

console.log(maxGap([3,5,4,2]));