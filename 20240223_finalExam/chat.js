class Vehicle {
  constructor(make) {
    this.make = make;
  }
  start() {
    return `Starting ${this.make}...`;
  }
}

class Car extends Vehicle {
  constructor(make, model) {
    super(make);
    this.model = model;
  }
  start() {
    return `${super.start()} Engine started.`;
  }
}

const myCar = new Car("Toyota", "Camry");
console.log(myCar.start());
