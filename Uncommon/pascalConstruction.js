 
//num at position i = number at position i in prev row + number at position (i + 1) in previous row.

 function pascalTriangle(n){
  const out = []
  for (var i = 0; i < n; i++) {
    var newA =[]
    if(i===0){
      newA.push(1)
    } else {
      for (var j = 0; j <= i; j++) {
        if (j==0 || j===i) {
          newA.push(out[0][0])
        } else {
          newA.push(out[i-1][j] + out[i-1][j-1])
        }
      }

    }
    out.push(newA)
  }
  return out
}

console.log(pascalTriangle(5))