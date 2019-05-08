// let us try the 2 pointer approach. 
// If we fix the two pointers at the end ( that is, i+1 and end of array ), 
// we look at the sum.

// If the sum is smaller than 0, we increase the first pointer to increase the sum.
// If the sum is bigger than 0, we decrease the end pointer to reduce the sum.
  
  
  function threeSum(arr) {
      
      if(arr.length < 1) return;
      
      // sort from low to high
      arr = arr.sort(function(a, b) {
       return a - b;
      });

      var result = {};

      for (var i = 0; i < arr.length - 2; ++i) { 
          var a = arr[i];
    
          var start = i + 1;
          var end = arr.length - 1;
    
          while (start < end) {
            var b = arr[start];
            var c = arr[end];
    
            var sum = a + b + c;
            if (sum === 0) {
              var naming = a.toString() + b.toString() + c.toString();
              result[naming] = [a, b, c]; 
            }
    
            if (sum <= 0) start++;
            if (sum > 0) end--;
          }  
         
      }

      return Object.keys(result).map(function(value) {
        return result[value]; 
      });
      
    }
	
	console.log(threeSum([-1, 0, 1, 2, -1, -4]))