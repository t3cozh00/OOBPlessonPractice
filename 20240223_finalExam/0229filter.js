//console.log(meteorites);

function getMeteorites() {
  //console.log("Fetching meteorites...");
  const massValue = document.querySelector("#mass").value;

  const results = meteorites.filter(
    (element) => parseInt(element.mass) < massValue
  );

  results.sort(
    (aMeteorite, bMeteorites) =>
      parseInt(aMeteorite.mass) - parseInt(bMeteorites.mass)
  );

  const resultsDomElements = results.map((meteorites) => {
    const tr = document.createElement("tr");
    const nameTd = document.createElement("td");
    const massTd = document.createElement("td");

    nameTd.textContent = meteorites.name;
    massTd.textContent = meteorites.mass;

    tr.appendChild(nameTd);
    tr.appendChild(massTd);

    return tr;
  });

  const tableBody = document.querySelector("table tbody");

  for (let i = 0; i < resultsDomElements.length; i++) {
    tableBody.appendChild(resultsDomElements[i]);
  }

  document.querySelector("#count").textContent = resultsDomElements.length;
}
