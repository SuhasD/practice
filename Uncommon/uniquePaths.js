// m * n
// There is a mathematical approach to solving this problem.
// you have to take m + n - 2 steps in total. 
//    You have to take (m - 1) steps going down and (n-1) steps going right.

// Lets say 0 denote a down step and 1 denote a right step.

// So we need to find out the number of strings of length m + n - 2 which have exactly m - 1 zeroes and n - 1 ones.

// Essentially we need to choose the positions of ‘1s’, and then ‘0s’ fall into the remaining positions.
// So, the answer becomes Choose(m+n-2, n - 1).

function uniquePaths(A, B){
	    var rows = Math.max(A, B);
	    var columns = Math.min(A, B);
	    
	    var row = [];
	    
	    for (var i = 0; i < columns; i++) {
	        row.push(0);
	    }
	    
	    row[0]++;
	    
	    for (var i = 0; i < rows; i++) {
	        for (var j = 0; j < columns - 1; j++) {
                row[j + 1] += row[j];
	        }
	    }
	    

	    return row[row.length - 1];
	}
	
	console.log(uniquePaths(4,4))