// Define the base object constructor function
function Animal(name) {
  this.name = name;
}

// Add a method to the base object's prototype
Animal.prototype.sayName = function () {
  console.log("My name is " + this.name);
};

// Create a child object constructor function that inherits from the base object
function Dog(name, breed) {
  this.name = name;
  this.breed = breed;
}

// Inherit methods from the base object's prototype
Dog.prototype = Object.create(Animal.prototype);

// Set the constructor property of the child object's prototype
Dog.prototype.constructor = Dog;

// Add a method to the child object's prototype
Dog.prototype.bark = function () {
  console.log("Woof! I'm a " + this.breed);
};

// Create instances of the base and child objects
var animal = new Animal("Generic Animal");
var dog = new Dog("Buddy", "Labrador");

// Test the methods
animal.sayName(); // Output: My name is Generic Animal
dog.sayName(); // Output: My name is Buddy
dog.bark(); // Output: Woof! I'm a Labrador

/*
Instructions:
Build upon the previous exercise by adding another 
level of inheritance. Create a grandchild object 
that inherits from the child object created earlier.
Demonstrate the chaining of constructors and inheritance.

Define the Grandchild Object:

Define a object called LabradorPuppy that inherits from the Dog object.
The LabradorPuppy constructor function should take name and color parameters, 
setting them as properties of the object. 
Ensure that the LabradorPuppy constructor properly calls the 
Dog constructor to initialize inherited properties.
Add a method cuteBark() to the LabradorPuppy prototype that logs a
cute bark message.

Test the Inheritance:

Create an instance of the LabradorPuppy object, passing appropriate values 
for name and color. Verify that the inherited methods from the Animal
and Dog objects work as expected by calling sayName() and bark() on the
LabradorPuppy instance.

Test the cuteBark() method to ensure that the LabradorPuppy object has 
inherited properties and methods from its parent objects correctly.
*/

// Create a grandchild object constructor function that he LabradorPuppy should take name and color parameters
function LabradorPuppy(name, color) {
  this.name = name;
  //Dog.call(this.name);
  // Call Dog constructor with breed set to "Labrador"
  //this.breed = breed;
  this.color = color;
}

// Define a object called LabradorPuppy
LabradorPuppy.prototype = Object.create(Dog.prototype);

// Set the constructor property of the grandchild object's prototype
LabradorPuppy.prototype.constructor = LabradorPuppy;

// Add a method to the  LabradorPuppy object's prototype
LabradorPuppy.prototype.cuteBark = function () {
  console.log("Shoo! I'm " + this.name);
};

// Create an instance of the LabradorPuppy object
var puppy = new LabradorPuppy("Vee", "white");

// Test the methods
puppy.cuteBark(); // Shoo! I'm Vee
puppy.sayName(); // My name is Vee
puppy.bark(); // Woof! I'm a undefined
