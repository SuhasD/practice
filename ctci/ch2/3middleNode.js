function removeMiddleNode(node){
    if(!this.head || !this.head.next) return false;

    node.data = node.next.data;
    node.next = node.next.next;
  }