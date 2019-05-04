

function selectionSort(arr){
	
  for(let i=0; i< arr.length; i++){
    let indexOfMin = i;
      for(let j= i+1; j< arr.length; j++){
        if(arr[j] < arr[indexOfMin]){
          indexOfMin = j;
        }
      }
      if(indexOfMin != i){
        let temp = arr[indexOfMin];
        arr[indexOfMin] = arr[i];
        arr[i] = temp;
      } 
  }

	return arr;
}

console.log(selectionSort([1, 0, 5, 2, 99, 10, 2]))