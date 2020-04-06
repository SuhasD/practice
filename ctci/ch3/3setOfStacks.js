class SetOfStacks{
    constructor(maxSize){
      if(!maxSize) throw Error("maxSize required")
      this.stacks = [[]];
      this.maxSize = maxSize;
    }
  
    push(value){
      const stacksLength = this.stacks.length;
      if(this.stacks[stacksLength - 1].length === this.maxSize){
        this.stacks[stacksLength] = [];
      }
      this.stacks[stacksLength - 1].push(value);
    }
  
    pop(){
      const stacksLength = this.stacks.length;
      const poppedValue = this.stacks[stacksLength - 1].pop();
  
      if(stacksLength > 1 && !this.stacks[stacksLength - 1].length){
        this.stacks.pop();
      }
      return poppedValue;
    }
  
    peek(){
      const stacksLength = this.stacks.length;
      return this.stacks[stacksLength - 1];
    }
  
    peekAt(stackNum){
      const stacksLength = this.stacks.length;
      const innerStack = this.stacks[stackNum - 1];
      if (stacksLength < stackNum) throw Error("Stack not big enough");
      return innerStack[innerStack.length - 1];
    }
  
    popAt(stackNum){
      let stackToPopFrom = this.stacks[stackNum - 1];
      if(!stackToPopFrom) throw Error("Invalid stack number");
  
      // if last stack
      if(stackToPopFrom == this.stacks.length) return this.pop();
  
      // move later stack elements 
      const poppedValue = stackToPopFrom.pop();
      const stacksLength = this.stacks.length;
  
      if(stackNum < stacksLength){
        for(let i = stackNum - 1; i < stacksLength - 1; i++ ){
          this.stacks[i].push(this.stacks[i+1].shift())
        }
      }
  
      // if last element in stacks is empty array
      if(!this.stacks[this.stacks.length - 1].length && this.stacks.length){
        this.stacks.pop();
      }
      return poppedValue;
    }
  }
  
  let s = new SetOfStacks(2);
  s.push(3);
  s.push(6);
  s.push(9);
  s.push(12);
  s.peek();
  s.peekAt(1);
  // s.pop();
  console.log(s.popAt(1));
  
  console.log(s)
  