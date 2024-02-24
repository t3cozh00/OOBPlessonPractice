//an example of object of a car
let car = {
  make: "Hondar",
  model: "Accord",
  year: 2020,
  color: "blue",
  numberOfDoors: 4,
  automaticTransmission: true,
  mileage: 1234,
};

let variableName = "model";
let variableName2 = "year";

console.log(car.model);
console.log(car["model"]); //this kind of syntax is more beneficial because it will pick the exact name of the property instead of the value of the property
console.log(car[variableName]);
console.log(car[variableName2]);

//loop over the object and print out all the properties
for (let property in car) {
  console.log(property); //excute the names of the properties, not values
  console.log(car[property]); // //excute the values of the properties
}

car.classification = "sedan";

console.log(car);
