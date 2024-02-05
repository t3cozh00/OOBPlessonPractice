const meteoritDataset = require("./y77d-th95.json");

/*
  Exercise 12 
  Use the dataset from exercise 8. Create a function which returns a random meteorite. 
  Use the function result to print out the meteorite information (print out name, mass and year).
*/

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
  const randomValue = Math.floor(Math.random() * data.length); //0.1 interg

  return data[randomValue];
}

const randomMeteorite = getRandomInformation(meteoritDataset);

console.log(
  randomMeteorite.name +
    " " +
    randomMeteorite.mass +
    " " +
    randomMeteorite.year.slice(0, 4)
);
