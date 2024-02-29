/*
let example = {
  foo: "bar",
  sum: function (a, b) {
    return a + b;
  },
};

console.log(example.foo);
console.log(example.sum(4, 5));

function AnotherAnimal(type) {
  this.type = type;
  this.printWhoAmI = function () {
    console.log(this.type);
  };
}

let dog = new AnotherAnimal("Dog");
let bird = new AnotherAnimal("Bird");
dog.printWhoAmI();
bird.printWhoAmI();

class Car {
  constructor(brand, registration) {
    this.brand = brand;
    this.registration = registration;
    this.speed = 0;
  }

  increaseSpeed() {
    this.speed += 5;
  }

  displaySpeed() {
    console.log(this.registration + ", speed " + this.speed);
  }
}


let audi = new Car("audi", "abc-123");
audi.displaySpeed();
audi.increaseSpeed();
audi.displaySpeed();
*/

/*
class Food {
  #name: string;
  #remaining: number;

  constructor(name: string, remaining: number) {
    this.#name = name;
    this.#remaining = remaining;
  }
  whatIsThis() {
    console.log(this.#name);
  }
  eatOne() {
    if (this.#remaining > 0) {
      //this.#remaining -= 1; // ⚠️ 更新 #remaining的值
      this.#remaining--;

      console.log(
        `Slurp! One ${this.#name.toLowerCase()} eaten. ${
          this.#remaining
        } remaining`
      );
    } else {
      console.log(`Sorry, no more ${this.#name.toLowerCase()} remaining!`);
    }
  }
}

let banana = new Food("Banana", 4);

//console.log(banana);

banana.whatIsThis();

banana.eatOne();
banana.eatOne();
banana.eatOne();
banana.eatOne();
banana.eatOne();
banana.eatOne();
*/

/*
class Food {
  #name: string;
  #remaining: number;

  constructor(name: string, remaining: number) {
    this.#name = name;
    this.#remaining = remaining;
  }
  whatIsThis() {
    console.log(this.#name);
  }
  eatOne() {
    if (this.#remaining > 0) {
      //this.#remaining -= 1; // ⚠️ 更新 #remaining的值
      this.#remaining--;

      console.log(
        `Slurp! One ${this.#name.toLowerCase()} eaten. ${
          this.#remaining
        } remaining`
      );
    } else {
      console.log(`Sorry, no more ${this.#name.toLowerCase()} remaining!`);
    }
  }

  getName() {
    return this.#name;
  }

  getAmount() {
    return this.#remaining;
  }
}

class Refrigerator {
  #storage: Food[];

  constructor() {
    //⚠️ no parameters
    this.#storage = [];
  }

  putFood(food: Food) {
    this.#storage.push(food);
  }

  getAndEatFood(nameOfFood: string) {
    let foundFood: Food | undefined = undefined;
    let indexeNumberOfFood: number = -1;
    for (let i = 0; i < this.#storage.length; i++) {
      if (nameOfFood === this.#storage[i].getName()) {
        foundFood = this.#storage[i];
        indexeNumberOfFood = i;
        break;
      }
    }

    if (foundFood === undefined) {
      console.log(`Sorry, no such food in this refrigerator!`);
      return;
    }

    foundFood.eatOne();
    if (foundFood.getAmount() === 0) {
      //const indexeNumberOfFood = this.#storage.indexOf(foundFood);
      this.#storage.splice(indexeNumberOfFood, 1);
    }
  }

  getContents() {
    console.log(`-----------`);

    for (let i = 0; i < this.#storage.length; i++) {
      console.log(
        `| ${this.#storage[i].getName()} ${this.#storage[i].getAmount()}`
      );
    }
    console.log(`-----------`);
  }
}

let r = new Refrigerator();

let apple = new Food("Apple", 2);

let bananas = new Food("Banana", 3);

let grapes = new Food("Grape", 10);

r.putFood(apple);

r.putFood(bananas);

//r.putFood(grapes);

r.getContents();

r.getAndEatFood("Apple");

r.getAndEatFood("Apple");

//r.getAndEatFood("Grape");

r.getAndEatFood("Banana");

r.getAndEatFood("Apple");

r.getAndEatFood("Banana");

r.getContents();
*/

/*
let x = 1;
let y = 2;
let z = x + y;
console.log(z); // 3

let a = x;
a = 5;
let b = a + x;
console.log(b); // 6

function selfSum(p) {
  p = p + p;
  return p;
}
let c = 2;

console.log(selfSum(c)); // 4
console.log(c); // 2

let a1 = {
  foo: 1,
  bar: 2,
};

let b1 = {
  foo: 5,
  bar: 6,
};

console.log(a1.foo + b1.bar); // 7

let c1 = a1;
c1.foo = 10;
console.log(a1.foo + b1.bar); // 16
*/

/*
let a1 = {
  foo: 1,
  bar: 2,
};

let b1 = {
  foo: 5,
  bar: 6,
};

console.log(a1.foo + b1.bar); // 7

function selfSum(p) {
  p.foo = p.foo + p.bar;
  return p;
}

let result = selfSum(a1);
//

console.log(a1.foo + b1.bar); //9

console.log(result); //object 3, 2
console.log(a1); // object 3, 2
console.log(result === a1); //true

aa = { foo: 6 };
result = { foo: 6 };
*/

const meteoritDataset = require("./y77d-th95.json");

/*
function printNames(data: any) {
  for (let i = 0; i < data.length; i++) {
    console.log(data[i].name);
  }
}

printNames(meteoritDataset);
*/

/*
interface Meteorite {
  name: string;
  id: string;
  nametype: string;
  recclass: string;
  mass: string;
  fall: string;
  year: string;
  reclat: string;
  reclong: string;
  geolocation: {
    type: string;
    coordinates: number[];
  };
}

function getRandomInformation(data: Meteorite[]) {
  const randomIndex = Math.floor(Math.random() * data.length);
  return data[randomIndex];
}
// const randomMeteorite = getRandomInformation(meteoritDataset);

// console.log(
//   randomMeteorite.name +
//     " " +
//     Number(randomMeteorite.mass).toFixed(1) +
//     " " +
//     randomMeteorite.year.slice(0, 4)
// );

function printRandomInformation(amount: number) {
  for (let i = 0; i < amount; i++) {
    const randomMeteorite = getRandomInformation(meteoritDataset);
    console.log(randomMeteorite.name);
  }
}
printRandomInformation(5);
*/

/*
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
  constructor(brand: string, registration: string) {
    super(brand, registration);
  }

  makeNoise() {
    console.log("Brrum Brrum");
  }

  increaseSpeed(): void {
    this.setSpeed(this.getSpeed() + 10);
  }
}

let myCar = new Car("Toyota", "ABS-123");
myCar.displaySpeed();

let myRaceCar = new RaceCar("Ferrari", "F-1");
myRaceCar.displaySpeed();

myCar.increasespeed();
myRaceCar.increaseSpeed();

myCar.displaySpeed();
myRaceCar.displaySpeed();

myRaceCar.makeNoise();
*/
