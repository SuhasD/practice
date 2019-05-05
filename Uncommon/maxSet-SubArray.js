// Loop i = 1 to Array.length :
//         IF current element is positive :
//                 update current sum
//                 compare max sum with current sum
//                 update max sum
//                 update max ranges
//         ELSE :
//             current sum := 0
//             update current ranges.
// EndLoop;

// return elements of max ranges
 
 function maxSet(a){
        var maxset = null;
        var maxsum = 0;
        var currsum = 0;
        var start = 0;
        var i;
        
        for( i = 0; i < a.length; i++ ) {
            a[i] = +a[i];
            if( a[i] > -1 ) {
                currsum += a[i];
               continue;
            }
            
            var end = i;
            if( !maxset || maxsum < currsum ) {
               maxset = a.slice( start, end );
            
                maxsum = currsum;
            }
            
            if( maxsum === currsum ) { 
                if( end-start > maxset.length ) {
                    maxset = a.slice( start, end );
                    maxsum = currsum;
                }
            }
            
            currsum = 0;
            start = end+1;
        }
        
        var end = i;
        //console.log( "hello %d %d %s", maxsum, currsum, maxset );
            if( !maxset || maxsum < currsum ) {
               maxset = a.slice( start, end );
            
                maxsum = currsum;
            }
            
            if( maxsum === currsum ) { 
                if( end-start > maxset.length ) {
                    maxset = a.slice( start, end );
                    maxsum = currsum;
                }
            }
        
        return maxset;
	}
	
	console.log(maxSet([1, 2, 5, -7, 2, 3]))