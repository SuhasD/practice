function urlify (str){

    str = str.split('');
  
    for(let i=0; i< str.length; i++){
      if(str[i] === " ") str[i] = "%20"
    }
  
    return str.join('');
  
    // return str ? str.replace(/\s/g, '%20') : str;
  }
  
  console.log(urlify('asr ty rre'));