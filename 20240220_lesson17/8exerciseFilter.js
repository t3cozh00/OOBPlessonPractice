const meteorites = require("./meteoriteDataSet.json");

// 8. Exercise

// Expand exercise 7 by writing a function, which will accept one parameter mass and the function returns the names of the meteorites, which mass is less or equal to the mass parameter of the function.

function getMeteoriteWithMass(dataBase, mass) {
  return dataBase.filter((element) => element.mass < mass);
}
console.log(getMeteoriteWithMass(meteorites, 1));
