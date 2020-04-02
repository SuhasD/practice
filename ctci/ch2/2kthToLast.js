function kthToLast(k){
    // Approach 1-> 
    // calculate size of list
    // required node -> size - k
    // iterate to size - k and return node

    // Approach 2 
    // use two pointers
    if(!this.head) return -1;

    let p1 = this.head;
    let p2 = this.head;
    // place 2 pointers k nodes apart

    // move p1 k nodes into ll
    for(let i=0; i< k; i++){
      if(!p1) return null;
      p1 = p1.next;
    }

    // Now move both simaltaneously,
    // when p1 hists the end, p2 will be at required node
    while(p1){
      p1 = p1.next;
      p2 = p2.next;
    }
    return p2;
  }