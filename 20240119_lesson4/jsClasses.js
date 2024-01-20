// here we can define a constructor function for car object
// we can use this function to create many many different car objects which have same structure but different values

function Car(make, model, year, color){
//(make, model, year, color) these are constructor parameters, use these parameters to initialize the object properties
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.numberwheels = 4;
    this.isRunning = false;
    
    this.turnOn = function(){
    //add method to the constructor function, a method is a function, which is a party of an object, it has direct access to the object properties
    // we can declare these properties, the properties can also be a function. when it is a function, it is called a method, and a method has accesee to the properties of the object. when we call turnOn "toyota.turnOn(); " for toyota, it modifies isRunning property of variable toyota object
        this.isRunning = true;
    }
}

// and use it to make cars
let toyota = new Car("Toyota", "Camry", 2020, "black");
// 'new 'Car' means we are now using this as a constructor function and it will create a new  object which will reference toyota variable
let mercedes = new Car("Mecedes", "C-Class", 2019, "white");

console.log(toyota);
console.log(mercedes);
console.log("starting toyota...")
toyota.turnOn(); // turn on toyota object, it calls the method, it has no parameters because in the this.turnOn = function(){ we didn't define any parameters

console.log("toyota has started");
console.log(toyota);
console.log(mercedes);

