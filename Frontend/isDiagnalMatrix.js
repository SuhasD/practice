function is_diagonal_matrix(user_matrix) {
    for (var i = 0; i < user_matrix.length; i++) {
        for (var j = 0; j < user_matrix.length; j++) {
            if (i !== j && user_matrix[i][j] !== 0) 
              return false;
        }
    }
    return true;
}


console.log(is_diagonal_matrix([[1, 0, 0], [0, 2, 0], [0, 0, 3] ]));
console.log(is_diagonal_matrix([[1, 0, 0], [0, 2, 3], [0, 0, 3] ]));


// return diagnal elements
function diag_elements(a) {
    var diag = [];
    for (var i = 0; i < a.length; i++) {
            let j = ((a.length) - i - 1);
            diag.push(a[i][i]);
            diag.push(a[i][j])
            
    }
    return diag;
}

// Sum of diagnals 

// function matrixDiagonals(matrix) {
//   let diagonal1 = 0, diagonal2 = 0;

//   for (var i = 0; i < matrix.length; i++) {
//     for (var j = 0; j < matrix.length; j++) {
//       // Get elements for the main diagonal (diagonal-1). So I need to increment the i and j equally
//       if ( i === j ) {
//         diagonal1 += matrix[i][j];
//       }
//       // Get elements for the secondary diagonal (diagonal-2). So I need to decrement j. Taking the value of the inner array from reverse (i.e. last element comes first)
//       if ( j = (matrix.length) - i - 1) {
//         diagonal2 += matrix[i][j];
//       }
//     }
//   }
// }

console.log(is_diagonal_matrix([[1, 0, 0], [0, 2, 0], [0, 0, 3] ]));
// console.log(is_diagonal_matrix([[1, 0, 0], [0, 2, 3], [0, 0, 3] ]));

// 1, 0, 0
// 0, 2, 0
// 0, 0, 3
