const meteoritDataset = require('./y77d-th95.json');

interface Meteorite {
name : string;
id : string;
nametype : string;
recclass : string;
mass : string;
fall : string;
year : string;
reclat : string;
reclong : string;
geolocation : {
   type : string;
   coordinates : number [];
};
};



function getRandomInformation (data : Meteorite[]){

    const randomValue = Math.floor(Math.random() * data.length);//0.1 interg

    return data[randomValue];

};

const randomMeteorite = getRandomInformation(meteoritDataset);

console.log(randomMeteorite.name + " " + randomMeteorite.mass + " " + randomMeteorite.year.slice(0, 4));
