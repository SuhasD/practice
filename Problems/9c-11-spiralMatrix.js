function spiralMatrix(n){
  // construct array structure first
  let results = [];
  for(let i=0; i<n; i++){
    results.push([]);
  }
  
  let counter = 1, start_row = 0, start_column = 0,
      end_row = n-1, end_column = n-1;
      
  while(start_column <= end_column && start_row <= end_row){
    
    // for start row 
    for(let i = start_column; i <= end_column; i++){
      results[start_row][i] = counter;
      counter++;
    }
    
    start_row++;
    
    // right most column 
    for(let i = start_row; i<= end_row; i++){
      results[i][end_column] = counter;
      counter++;
    }
    
    end_column--;
    
    // Bottom row
    for(let i = end_column; i >= start_column; i--){
      results[end_row][i]= counter;
      counter++
    }
    
    end_row--;
    
    // start column
    for(let i = end_row; i >= start_row; i--){
      results[i][start_column] = counter;
      counter ++;
    }
    
    start_column++;
  }
  
  // Printing in matrix format
  for(let val of results){
    console.log(val);
  }
}

spiralMatrix(3);

