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


let q = new Queue();

q.add('r');
q.add('s');
q.add('p');
q.add('q');
q.remove();

console.log(q);
console.log(q.peek());