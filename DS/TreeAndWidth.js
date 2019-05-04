class Node{
  constructor(val){
    this.data = val;
    this.children = [];
  }
  
  add(val){
    this.children.push(new Node (val));
  }
  
  remove(val){
    this.children = this.children.filter((node) => {
      return node.data !== val;
    });
  }
  
}

class Tree{
  constructor(){
    this.root = null;
  }
  
  traverseBF(fn){
    let arr = [this.root];
    let res = [];
    while(arr.length){
      const node = arr.shift();
      for(let val of node.children ){
        arr.push(val);
      }
      fn(node);
    }
  }
  
  traverseDF(fn){
    let arr = [this.root];
    while(arr.length){
      const node = arr.shift();
      for(let child of node.children){
        arr.unshift(child);
      }
     fn(node);
    }
  }
  
}

  function levelWidth(root){
    let counters = [0], arr = [root,'s'];
    
    while(arr.length > 1){
      const node = arr.shift();
      
      if(node === 's') {
        counters.push(0);
        arr.push('s');
      } else {
        for(let child of node.children){
          arr.push(child);
        } // for
        counters[counters.length - 1]++;
      } // if else
    } // while
    return counters;
  }

  const letters = [];
  const t = new Tree();
  t.root = new Node('a');
  t.root.add('b');
  t.root.add('c');
  t.root.children[0].add('d');

  t.traverseBF(node => {
    letters.push(node.data);
  });
  // print tree
  console.log(letters);
  
  // for level width
  const root = new Node(0);
  root.add(1);
  root.children[0].add(2);
  root.children[0].add(3);
  root.children[0].children[0].add(4);
  
  console.log(levelWidth(root));












