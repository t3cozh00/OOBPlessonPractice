let numbers = [45, 67, 32, 6, 78, 234, 789, 0];
let output = numbers.filter((element) => element < 10);
console.log(output);

// 7.	Exercise
//Use the NASA meteorite dataset (https://data.nasa.gov/resource/y77d-th95.json) and convert it to a new array, which contains only meteorites which have mass less than 100. Use filter method of an array.

const meteorites = require("./meteoriteDataSet.json");

let output7 = meteorites.filter((elemet) => elemet.mass < 100);
console.log(output7);
