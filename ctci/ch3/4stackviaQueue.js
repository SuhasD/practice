class MyQueue{
    constructor(){
      this.eQueue = [];
      this.dQueue = [];
    }
  
    enqueue(val){
      this.eQueue.push(val);
    }
  
    // move all items into array and then dequeu
    dequeue(){
      if(!this.eQueue.length && !this.dQueue.length) throw Error("Empty Stack");
  
      if(this.dQueue.length === 0){
        for(let item of this.eQueue){
          this.dQueue.push(item);
        }
      }
      return this.dQueue.pop();
    }  
  
    isEmpty(){
      return this.eQueue.length === 0;
    }
  }
  
  let stack = new MyQueue();
  stack.enqueue(5);
  stack.enqueue(10);
  stack.enqueue(15)
  console.log(stack.dequeue());
  console.log(stack.dequeue());
  console.log(stack)