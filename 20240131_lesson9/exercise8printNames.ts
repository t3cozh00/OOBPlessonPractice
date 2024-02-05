/*
  Exercise 8
  Take his dataset of earth meteorite landings from NASA https://data.nasa.gov/resource/y77d-th95.json. 
  Create an application which loads the dataset as a JSON file. 
  You can load JSON file to node application with const someObject = require('./somefile.json'). 
  Create a function, which prints the names of all meteorites.
*/

const meteoritDataset = require("./y77d-th95.json"); // './' means from this folder the file could be found
// '../' or '../../'

// Create a function, which prints the names of all meteorites.
function printNames(data: any) {
  for (let i = 0; i < data.length; i++) {
    console.log(data[i].name);

    //let  names : string = data[i].name;
    //return names; 如果是return的话，loop一次就停止了，只return第一个名字
  }
}

//console.log(printNames(meteoritDataset));

printNames(meteoritDataset); //return 所有名字
