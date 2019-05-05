function multiplyStrings(a, b){
  return (parseInt(a) * parseInt(b)).toString();
}

//Approach 2
// it wuld  be easier if you reversed the number for multiplication to calculate the reverse of the answer and then reverse it back to get the actual answer?
// It is mostly q multiplication process where we take one number digit by digit and keep multiplying the digit with the other number and maintaining the sum in another array.

function multiply(str1, str2){
	    if (str1 == "0" || str2 == "0") {
	        return "0";
	    }
        var arr1 = str1.split("").reverse().map(parseFloat);
        var arr2 = str2.split("").reverse().map(parseFloat);

        var result = [];
        
        for (var i = 0; i < arr1.length; ++i) {
            for (var j = 0; j < arr2.length; ++j) {
                if (result[i+j] == undefined) {
                    result[i+j] = 0;
                }
                result[i+j] += arr1[i] * arr2[j]
            }
        }
        
        var remainder = 0;
        for (var i = 0; i<result.length || remainder > 0 ; ++i) {
            if (result[i] == undefined) {
                result[i] = 0;
            }
            result[i] = result[i] + remainder;
            if (result[i] >= 10) {
                remainder = parseInt(result[i] / 10);
                result[i] = result[i] % 10;
            } else {
                remainder = 0;
            }
        }
        while (result[result.length-1] == 0) {
            result.pop();
        }
        return result.reverse().join('');
	}

console.log(multiplyStrings(['120'], ['10']))