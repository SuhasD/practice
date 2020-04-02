class Node {
    constructor(data, next = null) {
      this.data = data
      this.next = next
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null
    }
  
    insertFirst(val) {
      let newNode = new Node(val, this.head)
      this.head = newNode
    }
  
    insertLast(val) {
      let newNode = new Node(val, null);
      let node = this.head;
  
      if(!node){
        this.head = newNode;
      } else {
        while(node.next){
          node = node.next
        }
        node.next = newNode;
      }
  
    }
  
    printList(){
      if(!this.head) return null;
      let node = this.head;
      let list = [];
      let count = 0;
      while(node){
        count ++;
        list.push(node);
        node = node.next;
      }
      console.log(list);
      return list;
    }
  }
  
  let ll = new LinkedList();
  ll.insertLast(5);
  ll.insertLast(10);
  ll.insertLast(10);
  ll.insertLast(15);
  ll.insertLast(15);
  ll.insertFirst(0);
  ll.printList();
  
  