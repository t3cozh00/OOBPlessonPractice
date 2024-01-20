let a: number = 3;
let b: number = 6;

function sum(a: number,b: number): number{
    return a + b;
}

let hello = [1, 2, 3, 4, 5];
let nihao = ["Hello", "World"];

function getSecondElement (array : number[]) : number {
    return array[1];
} 
console.log(getSecondElement(hello));
//console.log(getSecondElement(nihao));


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
    country: "Belgium", //property with value in string(also an object)
    capital: "Brussels",
    languages: ["Dutch", "French", "German"],//property with value in array(also an object)
    area: 30689,
    population: 11492641,
    gdpPerCapita: 50114,
    iSO3166Code: "BE",   
}

function printCountryandPop(country : Country) : void{
    console.log(country.country + ", population " + country.population);
}
printCountryandPop(belgium);




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

// let germany = {
//     country: "Germany",
//     capital: "Berlin",
//     languages: ["German"],
//     area: 357600,
//     population: 8607016,
//     gdpPerCapita: 66037,
//     iSO3166Code: "DE",
// }

// let france = {
//     country: "France",
//     capital: "Paris",
//     languages: ["French"],
//     area: 643801,
//     population: 68042591,
//     gdpPerCapita: 58765,
//     iSO3166Code: "FR",
    
// }



// exercise 3

let arrayOneOfCountries = [belgium, china];
function printCountryWithMaximumPopulation(arrayOfCountries : Country[]) : Country{
    let countryWithMaximumPopulation : Country = arrayOfCountries[0];

    for (let i = 0; i < arrayOfCountries.length; i++){
        let currentCountry = arrayOfCountries[i];

        if (currentCountry.population > countryWithMaximumPopulation.population){
            countryWithMaximumPopulation = currentCountry;
        }
    }
    
    console.log("Country with highest population is " + countryWithMaximumPopulation.country + ". \n");
    
    return countryWithMaximumPopulation;
}
printCountryWithMaximumPopulation(arrayOneOfCountries);

