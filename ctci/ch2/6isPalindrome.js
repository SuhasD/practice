
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


// Approach 2
// O(N) TIME -- ONLY KEEPS TRACK OF HALF THE LIST
// USES A STACK
export function linkedListPalindrome1(list) {
    let slowPointer = list, fastPointer = list;
    const stack = [];
  
    while (fastPointer && fastPointer.next) {
      stack.push(slowPointer.data);
      slowPointer = slowPointer.next;
      fastPointer = fastPointer.next.next;
    }
  
    // If list length is odd, move slow pointer past the middle node.
    if (fastPointer) slowPointer = slowPointer.next;
  
    while (stack.length) {
      if (stack.pop() !== slowPointer.data) return false;
      slowPointer = slowPointer.next;
    }
    return true;
  }
  