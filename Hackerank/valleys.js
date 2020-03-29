function countingValleys(n, s) {
    let altitude = 0, noValleys = 0;

    for(let i=0; i<n; i++){
        if(s[i] === "D"){
            -- altitude;
        }
        if(s[i] === "U"){
            ++ altitude;
            if(altitude == 0) noValleys ++;
        }
    }
    return noValleys;
}