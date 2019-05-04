class Queue{
  constructor(){
    this.data = [];
  }
  
  add(val){
    this.data.unshift(val);
    return this.data;
  }
  
  remove(){
    return this.data.pop();
  }
  
  peek(){
    return this.data[this.data.length - 1];
  }
}

function weave(q1, q2){
  let q3 = new Queue();
  
  while(q1.peek() || q2.peek()){
    
    if(q1.peek()){
      q3.add(q1.remove());
    }
    
    if(q2.peek()){
      q3.add(q2.remove());
    }
  }
  return q3;
}


let q1 = new Queue();
q1.add('r');
q1.add('s');
q1.add('p');
q1.add('q');
console.log(q1);
console.log(q1.peek());

let q2 = new Queue();
q2.add('1');
q2.add('2');
q2.add('3');
q2.add('4');

console.log(weave(q1, q2));