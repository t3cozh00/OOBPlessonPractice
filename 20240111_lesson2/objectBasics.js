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


/* exercise 1 */
let belgium = {
    country: "Belgium",
    capital: "Brussels",
    languages: ["Dutch", "French", "German"],
    area: 30689,
    population: 11492641,
    gdpPerCapita: 50114,
    iSO3166Code: "BE",
    largestCities: {
        name: "Brussels",
        population: 188737
    }
}


/* exercise 2 */
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
        population: 3850809
    }
}

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
        population: 2102650
    }
}

// function namePopulation (country){
// console.log(country.country + ", population " + country.population );
// }
// namePopulation(germany);
// namePopulation(france);


/* exercise3 */
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
        population: 26875500
    }
}

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
        population: 984748
    }
}

// function printCountryWithMaximumPopulation(arrayOfCountries){
    
//     for (let i= 0; i < arrayOfCountries.length; i++){
//         let currentCountry = arrayOfCountries[i];
//         console.log(currentCountry.country);
//     }
// }
// let arrayOneOfCountries = [belgium, germany, france, china, sweden];
// printCountryWithMaximumPopulation(arrayOneOfCountries);



function printCountryWithMaximumPopulation(arrayOfCountries){
    let countryWithMaximumPopulation = arrayOfCountries[0];
    for (let i= 0; i < arrayOfCountries.length; i++){
        let currentCountry = arrayOfCountries[i];
        if (currentCountry.population > countryWithMaximumPopulation.population){
            countryWithMaximumPopulation = currentCountry;
             
        }
    }
    console.log("Country with highest population is " + countryWithMaximumPopulation.country + "\n");
}

let arrayOneOfCountries = [belgium, germany, france, china, sweden];
printCountryWithMaximumPopulation(arrayOneOfCountries);


/* exercise 4 */
function getSumOfPopulation(arrayOfCountries){
    let totalPopulation = 0;
    for (let i= 0; i < arrayOfCountries.length; i++){
        totalPopulation += arrayOfCountries[i].population;
    }
    return (totalPopulation);
}
console.log("Exercise 4: Total population of countries in the array is " + getSumOfPopulation(arrayOneOfCountries) + "\n");


/* exercise 5 */
function getCountryCodes(countries){
   let resultArrayOfCountryCodes = [];
   
   for (let i= 0; i < countries.length; i++){
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


/* exercise 6 */
function countryGdpOrder(countries){
    let resultArrayOfCountryGdp = [];
    for (let i = 0; i < countries.length; i++ ){
    let countryDdp = countries[i].gdpPerCapita;
    // console.log(countryDdp);
    resultArrayOfCountryGdp.push(countryDdp);
    resultArrayOfCountryGdp.sort();
}
return resultArrayOfCountryGdp;
}

let  currentCountryGdp = countryGdpOrder(arrayOneOfCountries);
console.log(currentCountryGdp);
console.log("Exercise 6: The list of countries ordered by their GDP (from biggest to smallest) is " + currentCountryGdp + "\n");


/* exercise 7 */
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
        let percentagePopulation = countries[i].largestCities.population / countries[i].population;
        let informationBiggestCity = countries[i].country + " " + countries[i].population + " " + countries[i].largestCities.name + " " + countries[i].largestCities.population + " " + (percentagePopulation * 100).toFixed(2) + "%";

        informationBiggestCitySum += informationBiggestCity + " \n";
    }
        let informationBiggestCitySumTotal = informationBiggestCitySum + totalSumPopulation;
        return informationBiggestCitySumTotal;
    
}

console.log(printInformationBiggestCity(arrayOneOfCountries));

/* exercise 8 */
