function rotateMatrix(a) {
        var n=a.length;
        for (var i=0; i<n/2; i++) {
            for (var j=i; j<n-i-1; j++) {
                var tmp=a[i][j];
                a[i][j]=a[n-j-1][i];
                a[n-j-1][i]=a[n-i-1][n-j-1];
                a[n-i-1][n-j-1]=a[j][n-i-1];
                a[j][n-i-1]=tmp;
            }
        }
        return a;
}

console.log(rotateMatrix([[1, 2], [3, 4]]));


function rotateCounterClockwise(a){
      var n=a.length;
      for (var i=0; i<n/2; i++) {
          for (var j=i; j<n-i-1; j++) {
              var tmp=a[i][j];
              a[i][j]=a[j][n-i-1];
              a[j][n-i-1]=a[n-i-1][n-j-1];
              a[n-i-1][n-j-1]=a[n-j-1][i];
              a[n-j-1][i]=tmp;
          }
      }
      return a;
}


console.log(rotateCounterClockwise([[1, 2], [3, 4]]));