function Car(Brand, Registration, Speed, increaseSpeed, displaySpeed){
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

let car = new Car("BMW", "ABC - 123");
//car.displaySpeed();
car.increaseSpeed();
car.increaseSpeed();
car.increaseSpeed();
car.displaySpeed(); 
//after calling 'car.increaseSpeed();' function, this.Speed = 5km/h, so 'car.displaySpeed();' function returns 5km/h; if call 'car.increaseSpeed();' function once more, 'car.displaySpeed();' function will return 10km/h;
let car2 = new Car("Audi", "DEF - 456");
car2.displaySpeed();
car2.increaseSpeed();
car2.displaySpeed(); 
//In the terminal: 
//Car ABC - 123 is going 15 km/h
//Car DEF - 456 is going 0 km/h
//Car DEF - 456 is going 5 km/h 
//This is how each object has their own internal state and they have their methods which modify internal state