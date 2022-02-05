// Start typing here

const counter = () => {
    
    const increaseCount = () => {
        count++;
        console.log(count);
        return count;    
    }
    
    for(let i=0; i< 10; i++){
        increaseCount();
    }
}

counter();


class Timer {
    constructor(){
        this.count = 0;
    }
    
    incrementCounter(){
        this.count++;
        return this.count;        
    }
}

const timer = new Timer();
for(let i=0; i< 10; i++){
    timer.incrementCounter();
}


// Start typing here

// pubsub.subscribe("paymentButtonClicked", data => {
    // console.log('My name is: ', + data.name);
// });
// pubsub.publish("paymentButtonClicked", {name: "Joe"});

class PubSub{
    constructor(){
        this.data = {};
    }
    
    subscribe(event, fn){
        this.data[event].push(fn);
    }
    
    publish(event, data){
        if(this.data[event]){
            for(let fn of this.data[event]){
                return fn();
            }
        }
    }
}






