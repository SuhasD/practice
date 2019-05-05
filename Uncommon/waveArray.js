
// Sort the array. 
// Now swap adjacent elemets in pairs.

// swap(1, 2)
// swap(3, 4)

// return array;

function waveArray(a){
    if(a.length < 1) return null;
    
    //Sort the array
    for(var i = 0; i < a.length; i++){
        a[i] = parseInt(a[i]);
    }
    a.sort(function(a, b){
        return a - b;
    });
    
    // Check and swap
    var wave = [];
    
    for(var i = 0; i < a.length; i+=2){
        if(i + 1 < a.length){
            wave.push(a[i + 1]);
        }
        wave.push(a[i]);
    }
    return wave;
}

console.log(waveArray([1, 2, 3, 4]))
	
	