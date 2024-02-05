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
    { name: "Marseille", population: 870018 },
    { name: "Lyon", population: 515695 },
    { name: "Toulouse", population: 479553 },
    { name: "Nice", population: 342295 },
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
    { name: "Beijing", population: 21516000 },
    { name: "Chongqing", population: 16751783 },
    { name: "Guangzhou", population: 13925000 },
    { name: "Shenzhen", population: 12528396 },
  ],
};

let sweden = {
  country: "Sweden",
  capital: "Stockholm",
  languages: ["Swedish"],
  area: 450295,
  population: 10540886,
  gdpPerCapita: 66209,
  iSO3166Code: "SE",
  largestCities: [
    { name: "Stockholm", population: 975551 },
    { name: "Gothenburg", population: 572799 },
    { name: "Malmö", population: 344166 },
    { name: "Uppsala", population: 233839 },
    { name: "Linköping", population: 162651 },
  ],
};

let arrayOfCountries = [france, china, sweden];
//the name of the country,
//the total population of the country,
//the names of the five biggest cities in the country and their population ,
//the total sum of population in the five biggest cities
//the percentage of the population in those cities out of the total population in the country.

function printCountryData(countries) {
  countries.forEach((currentCountry) => {
    // 29min24
    //console.log("hello");

    console.log(currentCountry.country);
    console.log("Country name: " + currentCountry.country);
    console.log("Population: " + currentCountry.population);
    console.log(
      "Name, population and percentage population of five biggest cities are: "
    );
    let sumPopulationBiggestCities = 0;
    currentCountry.largestCities.forEach((currentCity, index) => {
      let percentagePopulation = (
        (currentCity.population / currentCountry.population) *
        100
      ).toFixed(2);
      console.log(
        `${index + 1}.${currentCity.name}  ${
          currentCity.population
        }  ${percentagePopulation}%`
      );
      sumPopulationBiggestCities += currentCity.population;
    }); //on the left of the dot is object, on the right is method or property
    console.log(
      "Sum of population in five biggest cities is:" +
        sumPopulationBiggestCities
    );

    console.log("\n");
  });
  //const something = function (currentElement){
  //console.log(currentCountry.country);}
}
printCountryData(arrayOfCountries);

// read typscript of the webpage
