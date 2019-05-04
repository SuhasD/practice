

function mergeSort(arr){
  if(arr.length === 1) return arr;
  
  let midpoint = Math.floor(arr.length/2);
  const left = arr.slice(0, midpoint);
  const right = arr.slice(midpoint);
  
  return merge(mergeSort(left), mergeSort(right));
  
}

function merge(left, right){
  
  let res = [];
  
  while(left.length && right.length){
    if(left[0] < right[0]){
      res.push(left.shift())
    } else if(left[0] > right[0]){
      res.push(right.shift())
    }
  }

  return [...res, ...left, ...right];
}

console.log(mergeSort([1, 5, 8, 11, 3, 7, 9, 13, 4]));