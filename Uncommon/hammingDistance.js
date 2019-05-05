// Suppose the given array contains only binary numbers, i.e A[i] belongs to [0, 1].

// Let X be the number of elements equal to 0, and Y be the number of elements equals to 1.

// Then, sum of hamming distance of all pair of elements equals 2XY, as every pair containing one element from X and one element from Y contribute 1 to the sum.

// As A[i] belongs to [0, 231 - 1] and we are counting number of different bits in each pair, we can consider all the 31 bit positions independent.

// For example:
// A = [2, 4, 6] = [0102, 1002, 1102]</p>

// At bit position 0 (LSB): x = 3, y = 0
// At bit position 1: x = 1, y = 2
// At bit position 2(MSB): x = 1, y = 2

// Total sum = number of pairs having different bit at each bit-position = (2 * 3 * 0) + (2 * 1 * 2) + (2 * 1 * 2) = 8



function hammingDistance(arr){
  var ans = 0;  // Initialize result
  var n = arr.length;
   // traverse over all bits
   for (var i = 0; i < 31; i++)
   {
       // count number of elements with i'th bit set
       var count = 0;
       for (var j = 0; j <n ; j++)
          // console.log(1 << i)
           if ( (arr[j] & (1 << i)) )
               count++;

       // Add "count * (n - count) * 2" to the answer
       ans += (count * (n - count) * 2);
      // console.log(ans);
   }

   return ans%1000000007;
	}
	
console.log(hammingDistance([2, 4, 6]))

//Time complexity: O(N)
// Space complexity: O(1)