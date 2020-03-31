function zeroMatrix (matrix){
    if (matrix.length == 0) return false;

    let row = [];
    let column = [];

    for(let i=0; i< matrix.length; i++){
      for(let j= 0; j< matrix[0].length; j++){
        if(matrix[i][j] == 0){
          row[i] = true;
          column[j] = true;
        }
      }
    }

    console.log(row, column)

  for(let i=0; i< row.length; i++){
    if(row[i]) matrix = nullifyRow(matrix, i);
  }

  for(let j=0; j< column.length; j++){
    if(column[j]) matrix = nullifyColumn(matrix, j);
  }

  return matrix;
}

function nullifyRow(matrix, row){
  for(let i=0; i< matrix[0].length; i++){
    matrix[row][i] = 0;
  }
  return matrix;
}

function nullifyColumn(matrix, column){
  for(let i=0; i< matrix.length; i++){
    matrix[i][column] = 0;
  }
  return matrix;
}


  
const matrix4X4 = [
    [1, 0, 3, 4],
    [12, 13, 14, 5],
    [0, 16, 8, 6],
    [10, 9, 8, 7]
];

console.log(zeroMatrix(matrix4X4));


//Approach 2

// SECOND MORE OPTIMIZED SOLUTION
/* function zeroMatrix2(matrix) {
  if (!matrix || !matrix.length) throw Error('invalid matrix');

  if (matrix.length === 1 && matrix[0].length === 1) return matrix;

  const colCoords = new Set();

  matrix.forEach(row => {
    if (row.includes(0)) {
      row.forEach((columnCell, index) => {
        if (columnCell === 0) colCoords.add(index);
        row[index] = 0;
      });
    }
  });

  // Only goes through columns that have not already changed to zero
  matrix.forEach(row => {
    if (row[0] !== 0) {
      colCoords.forEach(col => row[col] = 0);
    }
  });

  return matrix;
} */