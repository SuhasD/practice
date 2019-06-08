var phoneField = document.getElementById('phone');

phoneField.addEventListener('keydown', waitForAWhile );

function waitForAWhile(){
  
  setTimeout(function(){
   
  function validateNumber(e){
    let val = phoneField.value;
    console.log(val.length);

    if(val.length == 0) {
      phoneField.value = '(';
     } else if(val.length == 4){
       phoneField.value = val+')';
     } else if(val.length == 8){
       phoneField.value = val+'-';
     }

    else if(val.length == 13){
      e.preventDefault();        
    }
  } 
    validateNumber();
  }, 2000)
}
