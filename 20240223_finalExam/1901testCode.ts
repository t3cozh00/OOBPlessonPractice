// exercise 2
interface Country {
  country: string;
  capital: string;
  languages: string[];
  area: number;
  population: number;
  gdpPerCapita: number;
  iSO3166Code: string;
}

const belgium = {
  country: "Belgium",
  capital: "Brussels",
  languages: ["Dutch", "French", "German"],
  area: 30689,
  population: 11492641,
  gdpPerCapita: 50114,
  iSO3166Code: "BE",
};

let china = {
  country: "China",
  capital: "Beijing",
  languages: ["Standard Chinese"],
  area: 9596961,
  population: 1411750000,
  gdpPerCapita: 23309,
  iSO3166Code: "CN",
};

function printCountryandPop(country: Country): void {
  console.log(country.country + ", population " + country.population);
}

let arrayThreeOfCountries = [belgium, china];
function printCountryWithMaximumPopulation(
  arrayOfCountries: Country[]
): Country {
  let countryWithMaximumPopulation: Country = arrayOfCountries[0];

  for (let i = 0; i < arrayOfCountries.length; i++) {
    let currentCountry = arrayOfCountries[i];

    if (currentCountry.population > countryWithMaximumPopulation.population) {
      countryWithMaximumPopulation = currentCountry;
    }
  }

  console.log(
    "Country with highest population is " +
      countryWithMaximumPopulation.country +
      ". \n"
  );

  return countryWithMaximumPopulation;
}
printCountryWithMaximumPopulation(arrayThreeOfCountries);

let car = {
  make: "Hondar",
  model: "Accord",
  year: 2020,
  color: "blue",
  numberOfDoors: 4,
  automaticTransmission: true,
  mileage: 1234,
};

console.log(car.model);
console.log(car["model"]);

//loop over the object and print out all the properties
for (let property in car) {
  console.log(property); //excute the names of the properties, not values
  console.log(car[property]); //excute the values of the properties
}

car.classification = "sedan";
console.log(car);

// define  constructor function for car object
function Car(make, model, year, color) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.numberwheels = 4;
  this.isRunning = false;
  this.turnOn = function () {
    this.isRunning = true;
  };
}

let toyota = new Car("Toyota", "Camry", 2020, "black");
console.log(toyota);
let mercedes = new Car("Mecedes", "C-Class", 2019, "white");
//console.log(mercedes);
toyota.turnOn();
console.log(toyota);
