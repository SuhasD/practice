Encapsulation 

var myInstance = {
  method1: function () {
    // ...
  },
  method2: function () {
    // ...
  }
};

Inheritance

I use a notation for inheritance that is based on ExtJS 3, which I find works pretty close to emulating classical inheritance in Java. It basically runs as follows:

// Create an 'Animal' class by extending
// the 'Object' class with our magic method
var Animal = Object.extend(Object, {
    move : function() {alert('moving...');}
});

// Create a 'Dog' class that extends 'Animal'
var Dog = Object.extend(Animal, {
    bark : function() {alert('woof');}
});

// Instantiate Lassie
var lassie = new Dog();

// She can move and bark!
lassie.move();
lassie.bark();
Namespaces

I also agree with Eric Miraglia on sticking to namespaces so the code above should be run within its own context outside the window object, this is critical if you intend your code to run as one of many concurrent frameworks / libraries executing in the browser window.

This means that the only way to the window object is via your own namespace / module object:

// Create a namespace / module for your project
window.MyModule = {};

// Commence scope to prevent littering 
// the window object with unwanted variables
(function() {

    var Animal = window.MyModule.Animal = Object.extend(Object, {
         move: function() {alert('moving...');}
    });

    // .. more code

})();
Interfaces

You can also make use of more advances OOP constructs such as interfaces to enhance your application design. My approach to these is to enhance the Function.prototype in order to get a notation along these lines:

var Dog = Object.extend(Animal, {
     bark: function() {
         alert('woof');
     }
     // more methods ..
}).implement(Mammal, Carnivore);
OO Patterns

As for 'Patterns' in the Java sense, I've only found use for the Singleton pattern (great for caching) and the Observer pattern for event-driven functionality such as assigning some actions when a user clicks on a button.

An example of utilising the Observer Pattern would be:

// Instantiate object
var lassie = new Animal('Lassie');

// Register listener
lassie.on('eat', function(food) {
   this.food += food;
});

// Feed lassie by triggering listener
$('#feeding-button').click(function() {
    var food = prompt('How many food units should we give lassie?');
    lassie.trigger('eat', [food]);
    alert('Lassie has already eaten ' + lassie.food + ' units');
});
And thats just a couple of tricks in my bag of OO JS, hope they are useful to you.

