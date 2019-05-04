class Stack{
  constructor(){
    this.data = [];
  }
  
  push(val){
    this.data.unshift(val);
    return this.data.length;
  }
  
  pop(){
    return this.data.shift();
  }
  
  peek(){
    return this.data[0];
  }
}


let s1 = new Stack();
s1.push('r');
s1.push('s');
s1.push('p');
s1.push('q');
console.log(s1.pop());
console.log(s1.peek());
