var a = [1, 2, 0, 0, 3, 0, 3, 0, 2, 0, 0, 0, 5, 0];
function moveZero(b) {
    for (var i = b.length - 1; i >= 0; i--) {
        if (b[i] === 0) {
            b.splice(i, 1);
            b.push(0);
        }
    }
    return b;
}
console.log(moveZero(a));


// Approach 2 -> huge space complexity
var a = [1, 2, 0, 0, 3, 0, 3, 0, 2, 0, 0, 0, 5, 0];
var b = [];
var c = [];

function moveZero(data) {

    for (var i = 0; i < data.length - 1; i++) {
        if (data[i] !== 0) {
            b.push(data[i]);
        } else {
            c.push(0)
        }
    }
    if (c.length > 0) {
        b = b.concat(c);
    }
    return b;
}
console.log(moveZero(a));
