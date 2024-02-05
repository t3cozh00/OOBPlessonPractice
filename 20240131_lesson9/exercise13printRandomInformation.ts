const meteoritDataset = require("./y77d-th95.json");

/*
  Exercise 13
  Improve your exercise 12 work by creating a new function, which accepts a parameter to indicate 
  how many random meteorites are selected and then printed out. 
  The new function should use the function you created for exercise 12.
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

//console.log(randomMeteorite.name + " " + randomMeteorite.mass + " " + randomMeteorite.year.slice(0, 4));

function printRandomInformation(amount: number) {
  for (let i = 0; i < amount; i++) {
    const randomMeteorite = getRandomInformation(meteoritDataset);

    console.log(randomMeteorite.name);
  }
}

printRandomInformation(7);
