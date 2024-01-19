// here we can define a constructor function for car object
function Car(make, model, year, color){
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.numberwheels = 4;
    this.isRunning = false;
    //add method to the constructor function
    this.turnOn = function(){
        this.isRunning = true;
    }
}

// and use it to make cars
let toyota = new Car("Toyota", "Camry", 2020, "black");
let mercedes = new Car("Mecedes", "C-Class", 2019, "white");

console.log(toyota);
console.log(mercedes);
console.log("starting toyota...")
toyota.turnOn(); //

console.log("toyota has started");
console.log(toyota);
console.log(mercedes);

function Car1(Brand, Registration, Speed, increaseSpeed, displaySpeed){
    this.Brand = Brand;
    this.Registration = Registration;
    this.Speed = 0;
    this.increaseSpeed = function(){
        this.Speed += 5;

    };
    this.displaySpeed = function(){
        console.log(`Car ${this.Registration} is going ${this.Speed} km/h`);
    };
    
    
   
    }
