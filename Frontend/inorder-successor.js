function inorderSuccessor(root, p) {
    let result = [];
    let stack = [];
    let currentNode = root;
    while (stack.length > 0 || currentNode !== null) {
        if (currentNode) {
            stack.push(currentNode);
            currentNode = currentNode.left;
        } else {
            currentNode = stack.pop();
            result.push(currentNode);
            currentNode = currentNode.right;
        }
    }
    for (let i = 0; i < result.length; i++) {
        if (result[i].val == p.val) {
            return result[i+1] ? result[i+1] : null;
        }
    }
    return null;
};

console.log(inorderSuccessor(rootNode, 9));


function Node (val) {
this.value = val;
this.left = null;
this.right = null;
}

const rootNode = new Node(20);
const left1 =  new Node(9);
const right1 = new Node(25);
const left2 = new Node(5);
const right2 = new Node(12);
const left3 = new Node(11);
const right3 = new Node(14);
rootNode.left = left1;
rootNode.right = right1;
left1.left = left2;
left1.right = right2;
left2.left = left3;
left2.right = right3;
