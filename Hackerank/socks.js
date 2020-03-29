function sockMerchant(n, ar) {

    let pairs = 0;
    let freq = {};

    for(let i=0; i< n; i++){
        let item = ar[i]
        if(freq[item]) freq[item] ++;
        else freq[item] = 1;
    }

    for(let key in freq){
        pairs += Math.floor(freq[key] / 2);
    }
    return pairs;
}
