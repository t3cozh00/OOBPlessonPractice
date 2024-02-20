// 9. Exercise

// Implement a html page, which offers UI for the user to execute the functionality of exercise 7 in the browser. The page should offer a number input to the user to input the mass and a button to run the code. Output should be a list of meteorite names together with a number, which shows how many meteorites match the mass condition.

const meteorites = require("./meteoriteDataSet.json");
import { meteorites } from "./meteoriteDataSet.json";

function getMeteorites() {
  console.log("Fetching meteorites...");
  // 1. get the element where the mass has been typed
  const inputElement = document.querySelector('#mass');

  // 2. read the mass value
  const mass = inputElement.value;
  // 3. filter the meteorites
  const result = meteorites.filter(m => parseInt(m.mass) < mass);
  // 3.5 sort the elements by mass
  result.sort((aMeteorite, bMeteorite) => parseInt)

  // 4. display the meteorites by creating new tr element for each meteorite
  const resultDomElement = result.map(
    const tr = document.createElement()
    const nameTd = 


    nameTd.texContent = meteorites.name

    tr.appendChild(nameTd);


    return tr;
  )



  // 5. add the created tr elements to the table 
  const tableBody = document.querySelector
  for(let i = 0;){
    const tr = resultDomElement[i];
    tableBody.appendChild(tr);
  }
  // 6. update the total number
  document.querySelector("#count").textContent = result.length;
}
