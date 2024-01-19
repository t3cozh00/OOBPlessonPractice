let car = {
   make: "Hondar",
   model: "Accord",
   year: 2020,
   color: "blue",
   numberOfDoors: 4,
   automaticTransmission: true,
   mileage: 1234,
}


let variableName = "numberOfDoors";

console.log(car.model);
console.log(car[variableName]);

//loop over the object and print out all the properties
for (let property in car) {
    console.log(property);
    console.log(car[property]);
}
car.classification = "sedan";

console.log(car);