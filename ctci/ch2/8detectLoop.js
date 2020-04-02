
function findLoopBeginning(list1, list2){
    let slow = head;
    let fast = head;
  
    while(fast && fast.next){
      slow = slow.next;
      fast = fast.next.next;
      // loop detected
      if(slow === fast) break;
    }
    
    // loop not detected
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