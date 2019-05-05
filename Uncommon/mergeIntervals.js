//Make sure inout is sorted
//Create an empty "result" array. 
//Loop over the ranges array 
	//and either change the last item of the result or add the current range to it.


function merge(ranges) {
	ranges.sort();
    var result = [], last = '';

    ranges.forEach(function (r) {
        if (!last || r[0] > last[1]){
            console.log(last = r);
            result.push(last = r);
        }
        else if (r[1] > last[1])
            last[1] = r[1];
    });

    return result;
}

let r = [[10, 20], [19, 40], [40, 60], [70, 80]];
console.log(merge(r));