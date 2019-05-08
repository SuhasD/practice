// Think stack.
// When you encounter an operator is when you need the top 2 numbers on the stack, 
// perform the operation on them and put them on the stack.
  
 function evalRPN(A){
      if(A.length < 1) return;
      
	    var isOperator = function(char) {
	        return char === '+' || char === '-' || char === '*' || char === '/';
	    };
	    
	    var stack = [];
	    for ( var i = 0; i < A.length; i++ ) {
	        var char = A[i];
	        if ( isOperator(char) ) {
	            var x = stack.pop();
	            var y = stack.pop();
	            var result;
	            switch(char) {
	                case '+':
	                    char = y + x;
	                    break;
	                case '-':
	                    char = y - x;
	                    break;
	                case '*':
	                    char = y * x;
	                    break;
	                case '/':
	                    char = Math.floor(y / x);
	                    break;
	            }
	        }
	        stack.push(parseInt(char));
	    }
	    return stack.pop();
	}
	
	console.log(evalRPN(["2", "1", "+", "3", "*"]))