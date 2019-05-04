function arrChunk(arr, n){
  
  var chunked = [];
  
  // Approach 1
  
  for(let i=0; i< arr.length; i++){
    const lastElem = chunked[chunked.length - 1];
    if(!lastElem || lastElem.length == n){
      chunked.push([arr[i]]);
    } 
    else {
      lastElem.push(arr[i]);
    }
  }
  
  return chunked;
  
  // Approach 2
  
  let index = 0;
  
  while(index < arr.length){
    chunked.push(arr.slice(index, index+n));
    index += n;
  }
    
  return chunked;
}

console.log(arrChunk(['2','3','5','6','6','1','4'], 2));