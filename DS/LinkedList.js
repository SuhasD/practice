

class Node{
  constructor(data, next = null){
    this.data = data;
    this.next = next;
  }
}

class LinkedList{
  constructor(){
    this.head = null;
  }
  
  insertFirst(val){
    let node = new Node(val, this.head);
    this.head = node;
  }
  
  size(){
    let count = 0, node = this.head;
    while(node){
      count ++;
      node = node.next;
    }
    return count;
  }
  
  getFirst(){
    return this.head;
  }  
  
  getLast(){
    if(!this.head) return null;
    let node = this.head;
    while(node){
      if(!node.next) return node
      node = node.next;
    }
  }
  
  clear(){
    this.head = null;
  }
  
  removeFirst(){
    if(!this.head) return null;
    let node = this.head;
    node = node.next;
    this.head = node;
    return this.head;
  }
  
  removeLast(){
    // if no node
    if(!this.head) return;
    
    // if one Node
    if(!this.head.next) {this.head; return;}
    
    let previous = this.head;
    let node = this.head.next;
    while(node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
    return node;
  }
  
  insertLast(val){
    const last = this.getLast();

    if (last) {
      // There are some existing nodes in our chain
      last.next = new Node(val);
    } else {
      // The chain is empty!
      this.head = new Node(val);
    }

  }

  
  getAt(index) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }
    return null;
  }

  removeAt(index) {
    if (!this.head) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(index - 1);
    if (!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next;
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const previous = this.getAt(index - 1) || this.getLast();
    const node = new Node(data, previous.next);
    previous.next = node;
  }

  forEach(fn) {
    let node = this.head;
    let counter = 0;
    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
  
}

var l = new LinkedList();
l.insertFirst('one');
l.insertFirst('two');
l.insertFirst('three');
// l.clear();
console.log(l.size());
console.log(l.getFirst());
console.log(l.getLast());
// console.log(l.removeFirst());
// console.log('remoce last', l.removeLast());
console.log(l.insertLast("Four"));
console.log('getlast ',l.getLast());

