
// 	input: ["zebra", "dog", "duck", "dot"]

// Now we will build prefix tree and we will also store count of characters

//                 root
//                 /|
//         (d, 3)/ |(z, 1)
//               /  |
//           Node1  Node2
//           /|        \
//     (o,2)/ |(u,1)    \(e,1)
//         /  |          \
//   Node1.1  Node1.2     Node2.1
//       | \         \            \
// (g,1) |  \ (t,1)   \(c,1)       \(b,1)
//       |   \         \            \ 
//     Leaf Leaf       Node1.2.1     Node2.1.1
//     (dog)  (dot)        \                  \
//                         \(k, 1)            \(r, 1)
//                           \                  \   
//                           Leaf               Node2.1.1.1
//                           (duck)                       \
//                                                         \(a,1)
//                                                         \
//                                                         Leaf
                                                         
  //param A : array of strings
	//return a array of strings
	function prefix(A){
         var result = [];
    for (var h = 0; h < A.length; h++) {
        var word = A[h];
        // an array that excludes the word above on line 6
        var arrayExcludeWord = A.filter(function (element) {
            return element !== word;
        });
        var validPattern = helper(word, arrayExcludeWord);
        result.push(validPattern);
    }
    return result;
	}

function helper(word, array) {
    var pattern = "";
    for (var j = 0; j < word.length; j++) {
        var letter = word.charAt(j);
        pattern += letter;
        if (isUniquePrefix(array, pattern)) {
            return pattern;
        }
    }

    return pattern;
}

function isUniquePrefix(array, pattern) {
    for (var i = 0; i < array.length; i++) {
        var item = array[i];
        if (item.indexOf(pattern) === 0) {
            return false;
        }
    }
    return true;
}

console.log(prefix(['zebra', 'dog', 'duck', 'dove']))