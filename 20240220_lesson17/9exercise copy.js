// 9. Exercise

// Implement a html page, which offers UI for the user to execute the functionality of exercise 7 in the browser. The page should offer a number input to the user to input the mass and a button to run the code. Output should be a list of meteorite names together with a number, which shows how many meteorites match the mass condition.
function getMeteorites() {
  fetch("https://data.nasa.gov/resource/y77d-th95.json")
    .then((response) => response.json())
    .then((meteorites) => {
      //console.log("Fetching meteorites...");
      // 1. get the element where the mass has been typed
      let inputMass = document.querySelector("#mass").value;
      let filteredMeteorites = meteorites.filter(
        (element) => parseInt(element.mass) < inputMass
      );
      let sortedFilteredMeteorites = filteredMeteorites.sort(
        (a, b) => a.mass - b.mass
      );

      //return sortedFilteredMeteorites;
      //console.log(sortedFilteredMeteorites);
      //4. display the meteorites by creating new tr element for each meteorite
      let newNameMass = sortedFilteredMeteorites.map((element) => {
        return {
          name: element.name,
          mass: element.mass,
        };
      });
      //console.log(newNameMass);

      let tableBody = document.createElement("tbody");
      let displayTable = document.querySelector("#meteoritesTable");

      for (let i = 0; i < newNameMass.length; i++) {
        let tr = document.createElement("tr");
        let tdName = document.createElement("td");
        let tdMass = document.createElement("td");

        tdName.textContent = newNameMass[i].name;
        tdMass.textContent = newNameMass[i].mass;

        tr.appendChild(tdName);
        tr.appendChild(tdMass);

        tableBody.appendChild(tr);
      }
      displayTable.appendChild(tableBody);

      // 6. update the total number of matches
      let countSpan = document.querySelector("#count");
      countSpan.textContent = newNameMass.length;
    });
}
