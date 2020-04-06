class TripleStack{
    constructor(){
      this.stackLength = [0,0,0];
      this.stack = [];
    }
  
    getLength(stackNum){
      return this.stackLength[stackNum - 1];
    }
  
    push(stackNum, value){
      const stackLength = this.getLength(stackNum);
        const stackIndex = this.getLength(stackNum) * 3 + stackNum - 1;
        this.stack[stackIndex] = value;
        this.stackLength[stackNum - 1]++;
    }
  
    pop(stackNum){
      const stackLength = this.getLength(stackNum);
      if(stackLength){
        let stackIndex = this.stack[stackLength - 1] * 3 + stackNum - 1;
        this.stack[stackIndex] = undefined;
        this.stackLength[stackNum - 1]--;
      }
    }
  
    peek(stackNum){
      const stackLength = this.getLength(stackNum);
      if (stackLength){
        let stackIndex = (stackLength -1) * 3 + stackNum - 1;
        return this.stack[stackIndex];
      }
      return false;
    }
  
    isEmpty(stackNum){
       return this.getLength[stackNum] === 0;
    }
}
  
let three = new TripleStack();
three.push(1, 15);
three.push(1, 10);
three.push(2, 25);
three.push(3, 35);
three.push(1, 5)
console.log(three.peek(1));
console.log(three.peek(3));

console.log(three);