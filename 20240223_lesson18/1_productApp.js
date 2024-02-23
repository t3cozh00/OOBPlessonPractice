function getAndCreateProductElements() {
  console.log("getAndCreateProductElements");

  // step 0 add this function to the event listener of the button

  // step 1 send fetch request to dummyJSON
  fetch("https://dummyjson.com/products")
    // step 2 receive the response and convert it to JSON
    .then((response) => response.json())
    .then((responseData) => {
      console.log(responseData);
      // step 3 create the product list with the code below adapted to the JSON data
      // create product list div
      const productList = document.createElement("div");
      productList.className = "productList";

      for (let i = 0; i < responseData.products.length; i++) {
        let productCard = createProductCard(
          responseData.products[i].title,
          responseData.products[i].thumbnail,
          responseData.products[i].description,
          responseData.products[i].price + "€"
        );

        // add the product card to the product list
        productList.appendChild(productCard);
      }

      //add the product list to the body
      document.querySelector("div#productDataTarget").appendChild(productList);
    });
}

function createProductCard(
  productName,
  productImage,
  productDescription1,
  productDescription2
) {
  const productCardDiv = document.createElement("div");
  productCardDiv.classList.add("productCard");

  const img = document.createElement("img");
  img.src = productImage;

  const productInfoDiv = document.createElement("div");
  productInfoDiv.classList.add("productInfo");

  const h1ProductTitle = document.createElement("h1");
  h1ProductTitle.innerText = productName;

  const h2ProductDescription1 = document.createElement("h2");
  h2ProductDescription1.innerText = productDescription1;

  const h2ProductDescription2 = document.createElement("h2");
  h2ProductDescription2.innerText = productDescription2;

  productCardDiv.appendChild(img);
  productCardDiv.appendChild(productInfoDiv);
  productInfoDiv.appendChild(h1ProductTitle);
  productInfoDiv.appendChild(h2ProductDescription1);
  productInfoDiv.appendChild(h2ProductDescription2);

  return productCardDiv;
}

/* Objective 1
add an imput field to the html
change the "get products" button so that it reads the input field
use that data to search for a matching product
display the searched products
before every new data search, clear out the existing products from the screen
*/

/* Objective 2
create a shopping cart
add button to each product so that the product can be added to the shopping cart
*/

/* Objective 3
create a button to display the contents of the shopping cart
this means a new view to the ui. the old div view should be cleared away
*/

/* Objective 4
convert the shopping cart quantity to a number input field and when quantity is changed the total price is updated.
*/

/* Objective 5
add a "back" button, which allows the user to go back to the product search view
*/
