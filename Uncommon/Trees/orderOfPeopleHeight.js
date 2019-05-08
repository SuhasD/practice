
// Heights : A list of heights of N persons standing in a queue
// Infronts : A list of numbers corresponding to each person (P) that gives the number of persons who are taller than P and standing in front of P


// O(N^2) approach

// Sort people by heights. Then iterate from shortest to tallest. In each step you need an efficient way to put the next person to the correct position. Notice that people we’ve already placed are not taller that the current person. And the people we place after are taller than the current. So we have to find a place such that the number of empty positions in the front is equal to the inFronts value of this person.

// Lets take an example :

// For example after sorting,

// Height - 1, 2, 3, 4, 5, 6
// Infront - 3, 2, 1, 2, 0, 0.
// 1st element should go in position 3. Hence final array becomes:

// ---1--
// 2nd element shall go in position 2. Hence final array becomes:

// --21--
// 3rd element should go in position 1. Hence final array becomes:

// -321--
// 4th element shall go in position 2. This is the position among the empty ones. Hence final array becomes:

// -321-4
// 5th element shall go in position 0. Hence final array becomes:

// 5321-4
// 6th element should go in position 0. Hence final array becomes:

// 532164
// Hint towards an even better solution

// Can we make the process of finding the ith empty position even more efficient ?
// Think binary tree / segment tree ? 
// Oh, by the way, this would be a nice time to read up on Segment Trees which are incredibly useful ( http://codeforces.com/blog/entry/3327 )
// What if you knew how many elements are there in first half of the array, and the second half of the array ?




// The query can be solved using segment / interval tree.
// The root contains the number of elements in [0, N].
// Left node contains the number of elements in [0, N/2]
// Right node contains the number of elements in [N/2 + 1, N]

// Lets say we need to find the ith empty position.
// We look at the number of elements X in [0, N/2].

// If
//     N / 2 - X >= i, the position lies in the left part of array and we move down to the left node.
//     N / 2 - X < i, we now look for i - (N / 2 - X) th position in the right part of the array and move to the right node in the tree.





function order(heights, infronts){
        var result = [],map = {}, i = 0;
        
        while (i < heights.length){
            result.push(-1)
            map[heights[i]] = infronts[i]
            i+= 1
        }
        
        function sortNumber(a,b) {
            return a - b;
        }
        
        heights.sort(sortNumber);
        
        for(i=0;i < heights.length ; i += 1){
            var pos = map[heights[i]]
            var j = 0,count = 0
            while (j < result.length){
                if (result[j] == -1 && count == pos){
                    result[j] = heights[i]
                    break
                }
                if(result[j] == -1)
                    count += 1
                j += 1
            }
        }
        return result
}



console.log(order([5, 3, 2, 6, 1, 4], [0, 1, 2, 0, 3, 2]));