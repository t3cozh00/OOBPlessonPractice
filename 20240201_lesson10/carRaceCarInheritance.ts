/*
  (2_JS Objects)8. Inheritance with ES6 Classes
  Inheritance is supported by class syntax with keyword extends.
  In the previous example there was a class Car with some properties and methods. 
  To create a new class which inherits the methods and properties from this class exteds keyword must be used.
  The following example demonstrates how to create an RaceCar class, which inherits, or exteds, the Car class.
*/

/*
  In the example above notice the super method call in the constructor. 
  The super executes the constructor of the class, which this class exteds and therefore it should 
  be the first to be called in constructor.
  Notice also the increaseSpeed method, which is an overriding method since there was a method 
  with same name in the Car class. The increaseSpeed method in RaceCar increases speed 
  more than the original method in Car class.
*/

class Car {
  #brand: string;
  #registration: string;
  #speed: number;

  constructor(brand: string, registration: string) {
    this.#speed = 0;
    this.#brand = brand;
    this.#registration = registration;
  }

  increasespeed() {
    this.#speed += 5;
  }

  displaySpeed() {
    console.log(
      `The ${this.#brand} ${this.#registration} is going ${this.#speed} km/h.`
    );
  }

  getSpeed() {
    return this.#speed;
  }

  setSpeed(speed: number) {
    this.#speed = speed;
  }
}

class RaceCar extends Car {
  // the class RaceCar inherits everything the class Car has
  constructor(brand: string, registration: string) {
    super(brand, registration);
    // super: to call the constructor of the car with parameters brand and registration
  }

  makeNoise() {
    console.log("Brrum Brrum");
  }

  increaseSpeed(): void {
    this.setSpeed(this.getSpeed() + 10);
  }
}

/* 
   use extends to create other classes of cars, like off-road car..which have 
   different functionality. By using this inheritance, we can avoid writing 
   duplicate code, make the code easier to understand, less amount of bugs or changes
   eg. class vehicle, then extends class helicopter, car, train, etc.
*/

let myCar = new Car("Toyota", "ABS-123");
myCar.displaySpeed();

let myRaceCar = new RaceCar("Ferrari", "F-1");

myRaceCar.displaySpeed();

myCar.increasespeed();
myRaceCar.increaseSpeed();

myCar.displaySpeed();
myRaceCar.displaySpeed();

myRaceCar.makeNoise();
