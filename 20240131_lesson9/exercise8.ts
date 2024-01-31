const meteoritDataset = require('./y77d-th95.json'); // './' means from this folder the file could be found
                                                     // '../' or '../../'

 // Create a function, which prints the names of all meteorites.
function printNames (data : any){

    for ( let i = 0; i < data.length; i++ ){

        console.log(data[i].name);

    //let  names : string = data[i].name;
    //return names;

}
};

//console.log(printNames(meteoritDataset));
