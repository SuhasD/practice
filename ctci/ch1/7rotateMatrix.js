function rotateMatrix (matrix){
    if (matrix.length == 0 || matrix[0].length != matrix.length) return false;

    let n = matrix.length;
  
    for(let layer=0; layer< n/2; layer++){
      let first = layer;
      let last = n - 1 - layer;

      for(let i = first; i < last; i++){
        let offset = i - first;

        let top = matrix[first][i];
        
        //left -> top
        matrix[first][i] = matrix[last - offset][first];
        // b -> left
        matrix[last - offset][first] = matrix[last][last - offset];
        // right -> bottom
        matrix[last][last - offset] = matrix[i][last];
        // top -> right
        matrix[i][last] = top;
      }
    }
    return matrix;
}
  
const matrix4X4 = [
    [1, 2, 3, 4],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
    [10, 9, 8, 7]
];

console.log(rotateMatrix(matrix4X4));