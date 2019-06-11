function reposition(arr, indices)
{
    var newArr = []; 

    for(var i = 0; i < arr.length; ++i)
    {
        var newIndex = indices[i];
        newArr[newIndex] = arr[i];
    }

    return newArr;
}

var arr = ["a", "b", "c", "d", "e", "f"];
var indices = [2, 3, 4, 0, 5, 1];
console.log(reposition(arr, indices));

// Approach 2 -> without extra var

function order(arr, indeces){
  arr = indices.map(function (item, index) {
    return arr[indices.indexOf(index)];
  });
  return arr;
}

console.log(order(arr, indices));



