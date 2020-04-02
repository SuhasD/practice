
// pass in heads of lists
function sumListsRecursive(list1,list2, carry = 0){
    if (!list1 && !list2 && !carry) return null;
  
    const resultNode = new Node();
    let value = carry;
  
    if (list1) value += list1.data; 
    if (list2) value += list2.data;
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