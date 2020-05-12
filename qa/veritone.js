//response
{meta:{
    "order":"desc",
    "query":"2002-2010"
}
items:[{
    "make":"honda",
    "year":"2002",
    "color":"blue"
},{}]}



fetch(url)
.then(res)({
    let queryRes = [];
    queryRes = sortyBy(res.items, "year");
    return filterBy(queryRes, "color", "blue");
});


function filterBy(arr, property, value){
    return arr.filter((item) => item[property] === value);
}

function sortBy(arr, property){
   return arr.sort((a,b) => a[property] > b[property] ? 1 : -1)
}



