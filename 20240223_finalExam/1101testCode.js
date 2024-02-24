//Exercise 2

let belgium = {
  country: "Belgium", //property with value in string(also an object)
  capital: "Brussels",
  languages: ["Dutch", "French", "German"], //property with value in array(also an object)
  area: 30689,
  population: 11492641,
  gdpPerCapita: 50114,
  iSO3166Code: "BE",
  largestCities: {
    name: "Brussels",
    population: 188737,
  },
};

let germany = {
  country: "Germany",
  capital: "Berlin",
  languages: ["German"],
  area: 357600,
  population: 8607016,
  gdpPerCapita: 66037,
  iSO3166Code: "DE",
  largestCities: {
    name: "Berlin",
    population: 3850809,
  },
};

function namePopulation(country) {
  console.log(
    "exercise2: " + country.country + ", population " + country.population
  );
}
namePopulation(germany);
namePopulation(belgium);

//Exercise 3

let sweden = {
  country: "Sweden",
  capital: "Stockholm",
  languages: ["Swedish"],
  area: 450295,
  population: 10540886,
  gdpPerCapita: 66209,
  iSO3166Code: "SE",
  largestCities: [
    { name: "Stockholm", population: 1515017 },
    { name: "Gothenburg", population: 572799 },
    { name: "Malmö", population: 312012 },
    { name: "Uppsala", population: 140454 },
    { name: "Västerås", population: 110877 },
  ],
};

let france = {
  country: "France",
  capital: "Paris",
  languages: ["French"],
  area: 643801,
  population: 68042591,
  gdpPerCapita: 58765,
  iSO3166Code: "FR",
  largestCities: [
    { name: "Paris", population: 2140526 },
    { name: "Marseille", population: 855393 },
    { name: "Lyon", population: 513275 },
    { name: "Toulouse", population: 479553 },
    { name: "Nice", population: 340017 },
  ],
};

let china = {
  country: "China",
  capital: "Beijing",
  languages: ["Standard Chinese"],
  area: 9596961,
  population: 1411750000,
  gdpPerCapita: 23309,
  iSO3166Code: "CN",
  largestCities: [
    { name: "Shanghai", population: 24183300 },
    { name: "Beijing", population: 20794100 },
    { name: "Chongqing", population: 15376000 },
    { name: "Tianjin", population: 12938224 },
    { name: "Guangzhou", population: 12702800 },
  ],
};

let arrayOneOfCountries = [belgium, germany, france, sweden, china];
function printCountryWithMaximumPopulation(arrayOfCountries) {
  let countryWithMaximumPopulation = arrayOfCountries[0];
  for (let i = 0; i < arrayOfCountries.length; i++) {
    let currentCountry = arrayOfCountries[i];
    if (currentCountry.population > countryWithMaximumPopulation.population) {
      countryWithMaximumPopulation = currentCountry;
    }
  }
  return countryWithMaximumPopulation.country;
}
console.log(
  "exercise3: Country with highest population is " +
    printCountryWithMaximumPopulation(arrayOneOfCountries)
);

//Exercise 4
function getSumOfPopulation(arrayOfCountries) {
  let totalPopulation = 0;
  for (let i = 0; i < arrayOfCountries.length; i++) {
    totalPopulation += arrayOfCountries[i].population;
  }
  return totalPopulation;
}
console.log(
  "Exercise4: Total population of countries in the array is " +
    getSumOfPopulation(arrayOneOfCountries)
);

//Exercise 5
function getCountryCodes(arrayOfCountries) {
  let countriesCodes = [];
  for (let i = 0; i < arrayOfCountries.length; i++) {
    countriesCodes.push(arrayOfCountries[i].iSO3166Code);
  }
  return countriesCodes;
}
console.log(
  "Exercise5: Countries codes are " + getCountryCodes(arrayOneOfCountries)
);
