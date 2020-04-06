class Stack{
    constructor(){
      this.top = null;
      this.data = [];
    }
  
    push(data){
      this.data.push(data);
      this.top = this.data.length - 1;
      return this.data;
    }
  
    pop(){
      if(this.data.length) {
        this.data.pop();
        this.top --;
        return this.data;
      }
      throw Error("Empty stack")
    }
  
    peek(){
      if(this.top){
        return this.data[this.top];
      }
      throw Error("Empty stack");
    }

    isEmpty(){
      return this.data.length === 0
    }

    min(){
      let min = Infinity;
      if (this.isEmpty()) return false;
      for(let item of this.data){
        if (item < min){
          min = item;
        }
      }
      return min;
    }
  }
  
  let stack = new Stack();
  console.log(stack.push(5));
  console.log(stack.push(15));
  console.log(stack.push(25));
  console.log(stack.push(0));
  console.log(stack.min());