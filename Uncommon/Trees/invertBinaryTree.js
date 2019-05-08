// So, let's invert a binary tree in Javascript

// Original Tree
//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9

// Simple Binary Tree (depth = 3)


// Think recursively.
// On every node, you need to invert the left and right subtree and then swap them.

// Recursive function to return an inverted tree
function invertTree (node) {
  if (!node) return;
  
  var right = invertTree(node.right);
  var left = invertTree(node.left);
  if (left) node.left = right;
  if (right) node.right = left;
  return node;
}

function Node(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}


const root = new Node(4);
root.left = new Node(2);
root.left.left = new Node(1);
root.left.right = new Node(3);
root.right = new Node(7);
root.right.left = new Node(6);
root.right.right = new Node(9);

// Inverted Tree
//      4
//    /   \
//   7     2
//  / \   / \
// 9   6 3   1

// Log the inverted tree

console.log(invertTree(root));