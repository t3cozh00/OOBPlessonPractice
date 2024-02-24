//Exercise 6
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

let arrayTwoOfCountries = [france, sweden, china];
function printInformationCountries(countries) {
  countries.forEach((currentCountry) => {
    console.log("Exercise7: " + "\nCountry name: " + currentCountry.country);
    console.log("Country population: " + currentCountry.population);
    console.log("Country five biggest cityies and population:");

    let sum = 0;
    currentCountry.largestCities.forEach((currentCity, indexCity) => {
      console.log(
        indexCity +
          1 +
          ". Name of city: " +
          currentCity.name +
          "; Population of city: " +
          currentCity.population
      );

      sum += currentCity.population;
    });
    console.log("Total population of five biggest cities: " + sum);

    let percentagePopulation = sum / currentCountry.population;
    console.log(
      "Percentage of the population in those cities out of the country population: " +
        (percentagePopulation * 100).toFixed(2) +
        "%"
    );
    console.log("\n");
  });
}
printInformationCountries(arrayTwoOfCountries);
//console.log("exercise7: " + printInformationCountries(arrayTwoOfCountries));
