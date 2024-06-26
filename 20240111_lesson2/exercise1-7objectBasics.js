// let albumName = "Thriller";
// let albumReleased = 1982;
// let singer = "Michael";
// let numberOfSongs = 9;

// let albumName2 = "Bad";
// let albumReleased2 = 1987;
// let singer2 = "Michael";
// let numberOfSongs2 = 10;

// let albumName3 = "Dangerous";
// let albumReleased3 = 1991;
// let singer3 = "Michael";
// let numberOfSongs3 = 14;

// let album1 = {
//     name: "Thriller",
// released: 1982,
// singer: "Michael",
// numberOfSongs: 9
// }

// let album2 = {
//     name: "Bad",
// released: 1987,
// singer: "Michael",
// numberOfSongs: 10
// }

// console.log(albumName3 + " was released in " + albumReleased3);
// console.log(album2.name + " was released in " + album2.released);

/* 
  Exercise 1
  Write code, which stores information of Belgium in an object. 
  The object information should be stored into a variable named belgium. 
  Information to be stored is the following
   · Country Belgium
   · Capital Brussels
   · Languages Dutch, French, German
   · Area 30689 km2
   · Population 11492641
   · GDP per capita $50114
   · ISO3166 code BE
*/

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

/* 
  Exercise 2
  Enhance your Exercise 1 solution by creating objects similar to Belgium for Germany 
  (do France and Sweden as well if you have time) 
  (country data available at wikipedia – for example https://en.wikipedia.org/wiki/Germany).
  Next write a function, which prints the name of the country and its population in a string. 
  “Belgium, population 11492641”. The function should accept single parameter, the object of the country information.
  Call the function for all your countries.
*/

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

let france = {
  country: "France",
  capital: "Paris",
  languages: ["French"],
  area: 643801,
  population: 68042591,
  gdpPerCapita: 58765,
  iSO3166Code: "FR",
  largestCities: {
    name: "Paris",
    population: 2102650,
  },
};

// function namePopulation (country){
// console.log(country.country + ", population " + country.population );
// }
// namePopulation(germany);
// namePopulation(france);

/* 
  Exercise3
  Create an array, which has similar country objects as in Exercise 2 and 1 as the elements of the array. 
  The array should containt information about the same countries as exercise 2.
  Write a function, which accepts an array of countries as an parameter and returns the one with maximum population.
*/
// initialize france, china, sweden object

let china = {
  country: "China",
  capital: "Beijing",
  languages: ["Standard Chinese"],
  area: 9596961,
  population: 1411750000,
  gdpPerCapita: 23309,
  iSO3166Code: "CN",
  largestCities: {
    name: "Shanghai",
    population: 26875500,
  },
};

let sweden = {
  country: "Sweden",
  capital: "Stockholm",
  languages: ["Swedish"],
  area: 450295,
  population: 10540886,
  gdpPerCapita: 66209,
  iSO3166Code: "SE",
  largestCities: {
    name: "Stockholm",
    population: 984748,
  },
};

// function printCountryWithMaximumPopulation(arrayOfCountries){

//     for (let i= 0; i < arrayOfCountries.length; i++){
//         let currentCountry = arrayOfCountries[i];
//         console.log(currentCountry.country);
//     }
// }
// let arrayOneOfCountries = [belgium, germany, france, china, sweden];
// printCountryWithMaximumPopulation(arrayOneOfCountries);

function printCountryWithMaximumPopulation(arrayOfCountries) {
  let countryWithMaximumPopulation = arrayOfCountries[0];
  for (let i = 0; i < arrayOfCountries.length; i++) {
    let currentCountry = arrayOfCountries[i];
    if (currentCountry.population > countryWithMaximumPopulation.population) {
      countryWithMaximumPopulation = currentCountry;
    }
  }
  console.log(
    "Country with highest population is " +
      countryWithMaximumPopulation.country +
      "\n"
  );
}
//method object

let arrayOneOfCountries = [belgium, germany, france, china, sweden];
printCountryWithMaximumPopulation(arrayOneOfCountries);

/* 
  Exercise 4 
  Use the same array of countries as in exercise 3. Write a function 
  which calculates and returns the sum of the populations of the countries in the array.
*/

function getSumOfPopulation(arrayOfCountries) {
  let totalPopulation = 0;
  for (let i = 0; i < arrayOfCountries.length; i++) {
    totalPopulation += arrayOfCountries[i].population;
  }
  return totalPopulation;
}
console.log(
  "Exercise 4: Total population of countries in the array is " +
    getSumOfPopulation(arrayOneOfCountries) +
    "\n"
);

/* 
  Exercise 5 
  Use the same array of countries as in exercise 3. 
  Write a function which accepts the array of countries as a parameter, 
  returns a new array of the country codes of the countries given as parameter.
*/

function getCountryCodes(countries) {
  let resultArrayOfCountryCodes = [];

  for (let i = 0; i < countries.length; i++) {
    // resultArrayOfCountryCodes[i]= countries[i].iSO3166Code;
    let currentCountryCode = countries[i].iSO3166Code;
    // console.log(currentCountryCode);
    resultArrayOfCountryCodes.push(currentCountryCode);
  }
  return resultArrayOfCountryCodes;
}

let countryCodes = getCountryCodes(arrayOneOfCountries);
console.log(countryCodes);
console.log("Exercise 5: The result is " + countryCodes + "\n");

/* 
  Exercise 6
  Use the same array of countries as in exercise 3. Write a function 
  which accepts the array of countries as parameter. 
  The function should print out a list of countries ordered by their GDP. 
  Biggest should be first and smallest should be last. 
  Print out only the name of the country and the GDP.
  Do this exercise WITHOUT looking for help from the internet or AI about sorting algorithms.
  First implement your own solution for this. Then you research about existing sorting algorithms, 
  choose one and make an implementation of it. 
*/

function countryGdpOrder(countries) {
  let resultArrayOfCountryGdp = [];
  for (let i = 0; i < countries.length; i++) {
    let countryDdp = countries[i].gdpPerCapita;
    // console.log(countryDdp);
    resultArrayOfCountryGdp.push(countryDdp);
    resultArrayOfCountryGdp.sort();
  }
  return resultArrayOfCountryGdp;
}

let currentCountryGdp = countryGdpOrder(arrayOneOfCountries);
console.log(currentCountryGdp);
console.log(
  "Exercise 6: The list of countries ordered by their GDP (from biggest to smallest) is " +
    currentCountryGdp +
    "\n"
);

/* 
  Exercise 7
  Use the same array of countries as in exercise 3. Modify the country information so that 
  each country object has a new property called largestCities and the value of the property 
  is an array of objects. The objects in the array should be formatted as follows:
  The five biggest cities of each country should be recorded. Next create a function, 
  which accepts the array of countries as parameter. The function should print out for each country
    · the name of the country,
    · the total population of the country,
    · the names of the five biggest cities in the country and their population ,
    · the total sum of population in the five biggest cities
    · the percentage of the population in those cities out of the total population in the country.
*/

// function printInformationBiggestCity(countries){
//     let totalSumPopulation = 0;
//     let informationBiggestCity = "";
//     for(let i = 0; i < countries.length; i++ ){

//         totalSumPopulation += countries[i].largestCities.population;
//         let percentagePopulation =  countries[i].largestCities.population / countries[i].population;
//         let informationBiggestCity = countries[i].country + " " + countries[i].population + " " + countries[i].largestCities.name + " " + countries[i].largestCities.population + " " + percentagePopulation.toFixed(2) * 100 + "%";

//     }
//     let informationBiggestCitySum = informationBiggestCity + " " + totalSumPopulation;

//     console.log(informationBiggestCitySum);

// }
// printInformationBiggestCity(arrayOneOfCountries);

function printInformationBiggestCity(countries) {
  let totalSumPopulation = 0;
  let informationBiggestCitySum = "";

  for (let i = 0; i < countries.length; i++) {
    totalSumPopulation += countries[i].largestCities.population;
    let percentagePopulation =
      countries[i].largestCities.population / countries[i].population;
    let informationBiggestCity =
      countries[i].country +
      " " +
      countries[i].population +
      " " +
      countries[i].largestCities.name +
      " " +
      countries[i].largestCities.population +
      " " +
      (percentagePopulation * 100).toFixed(2) +
      "%";

    informationBiggestCitySum += informationBiggestCity + " \n";
  }
  let informationBiggestCitySumTotal =
    informationBiggestCitySum + totalSumPopulation;
  return informationBiggestCitySumTotal;
}

console.log(printInformationBiggestCity(arrayOneOfCountries));

/* exercise 8 */
