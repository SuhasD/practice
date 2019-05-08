// Think recursion. 
// Carrying along the number formed from root to the node when calling the function for node, will make stuff easier for you.
// When you encounter a new digit, you can append it to existing one as newNum = oldNum * 10 + newDigit.


var sumNumbers = function(root) {
    var arr = [0];
    
    helper(root, 0, arr);
    
    return arr[0];
};

function helper(node, sum, arr) {
    if (!node) {
        return;
    }
    
    sum = sum*10 + node.val;
    
    if (!node.left && !node.right) {
        arr[0] += sum;
        return;
    }
    
    if (node.left) {
        helper(node.left, sum, arr);
    }
    
    if (node.right) {
        helper(node.right, sum, arr);
    }
    
}

function Node(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

//       1
//      / \
//     2   3


const root = new Node(1);
root.left = new Node(2);
// root.left.left = new Node(1);
// root.left.right = new Node(5);
root.right = new Node(3);

console.log(sumNumbers(root))