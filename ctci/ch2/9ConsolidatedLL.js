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
  
    removeMiddleNode(node){
      if(!this.head || !this.head.next) return false;
  
      node.data = node.next.data;
      node.next = node.next.next;
    }
  
    removeDuplicates(){
      if (!this.head) return false;
      let current = this.head;
  
      while(current.next){
        if(current.data == current.next.data ){
          current.next = current.next.next;
        } else {
          current = current.next;
        }
      }
    }
  
    kthToLast(k){
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
  }
  
  let ll = new LinkedList();
  ll.insertLast(5);
  ll.insertLast(1);
  ll.insertLast(5);
  
  let l2 = new LinkedList()
  l2.insertLast(13);
  l2.insertLast(15);
  l2.insertLast(19);
  ll.printList();
  // ll.removeDuplicates();
  // let n = ll.kthToLast(2)
  // ll.removeMiddleNode(n);
  // console.log(ll.kthToLast(2));
  l2.printList();
  // console.log(isPalindrome(ll.head));
  // console.log(ll.kthToLast(2));
  
  // console.log(sumListsRecursive(ll.head, l2.head));
  console.log(BookSolutionIntersection(ll.head, l2.head));
  
  
  // BOOKS SOLUTION
  // (O(A + B)) O(N) TIME -- O(1) SPACE
  function getTailAndSize(list) {
    let size = 1;
  
    while (list) {
      size++;
      list = list.next;
    }
  
    return {tail: list, size};
  }
  
  function getKthNode(list, k) {
    while (list && k--) list = list.next;
    return list;
  }
  
  function BookSolutionIntersection(list1, list2) {
    if (!list1 || !list2) return;
  
    const head1 = getTailAndSize(list1),
          head2 = getTailAndSize(list2);
  
    if (head1.tail !== head2.tail) return;
  
    let longerList = head1.size > head2.size ? list1 : list2,
        shorterList = longerList === list1 ? list2 : list1;
  
    longerList = getKthNode(longerList, Math.abs(head1.size - head2.size));
  
    while (shorterList) {
      if (shorterList === longerList) return shorterList;
      shorterList = shorterList.next;
      longerList = longerList.next;
    }
  }
  
  // |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|
  
  // IF BOTH LISTS ARE THE SAME LENGTH
  function intersection(list1, list2) {
    let head1 = list1, head2 = list2;
  
    while (head1) {
      if (head1 === head2) return head1;
      head1 = head1.next;
      head2 = head2.next;
    }
  }
  
  function sumListsRecursive(list1,list2, carry = 0){
    if (!list1 && !list2 && !carry) return null;
  
    const resultNode = new Node();
    let value = carry;
  
    if (list1) value += list1.data; 
    if (list2) value += list2.data;
    // console.log(list1)
    resultNode.data = (value % 10);
  
    if (list1 || list2) {
      const nextNode = sumListsRecursive(
        list1 ? list1.next : null,
        list2 ? list2.next : null,
        value >= 10 ? 1 : 0
      );
      resultNode.next = nextNode;
    }
    return resultNode;
  }
  
  function isPalindrome(list){
    let reversed = reversedClone(list);
    return isEqual(list, reversed);
  }
  
  function reversedClone(list){
    let head = null;
    if(!list) return false;
    while(list){
      let n = new Node(list.data);
      n.next = head;
      head = n;
      list = list.next;
    }
    return head;
  }
  
  function isEqual(one, two){
    console.log(one, two)
    while(one && two){
      if(one.data !== two.data){
        return false;
      }
      one = one.next;
      two = two.next;
    }
    return one == null && two == null;
  }
  
  function findLoopBeginning(list1, list2){
    let slow = head;
    let fast = head;
  
    while(fast && fast.next){
      slow = slow.next;
      fast = fast.next.next;
      if(slow === fast) break;
    }
  
    if(!fast && !fast.next) return null;
  
    // Keep fast at meeting point
    // move slow to head
    // if they meet at same place, they must meet at loop start
    slow = head;
    while(slow != fast){
      slow = slow.next;
      fast = fast.next;
    }
    return fast;
  }