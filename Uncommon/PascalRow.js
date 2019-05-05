//Pascals triangle - sum of pairs produce next row

function getPascalRow(A){
    var S = new Array();
    S.push(1);
    for (var k = 0; k< A; k++)
        S.push(S[k]*(A-k)/(k+1));
    return S;
}

console.log(getPascalRow(3));