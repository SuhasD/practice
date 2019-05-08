// The brute force approach is simple. Loop through each element x and find if there is another value that equals to target – x. As finding another value requires looping through the rest of array, its runtime complexity is O(n^2).
// To improve on it, notice that when we fix one of the integers ‘curValue’, we know the value of the other integer we need to find ( target - curValue ). 
// Then it becomes a simple search problem. You can store all the integers of the array in a hashmap and do a lookup to check if the elements exists in the map.

function twoSum(A, B){
        var hash = {};
        for (var i = 0; i < A.length; i++) {
            
            if (hash[B - A[i]]) {
                return [hash[B - A[i]], i + 1];
            }
            if (!hash[A[i]]) {
                hash[A[i]] = i + 1;
            }
        }
        return [];
	}
	
	console.log(twoSum([1, 3, -1, -3, 5, 3, 6, 7], 3))