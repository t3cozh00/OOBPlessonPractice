function getAndCreateProductElements() {
  console.log("getAndCreateProductElements");
  //const body = document.querySelector("body");

  // step0 add this function to the event listener of the button

  // step1 send fetch request to dummyJSON
  fetch("https://dummyjson.com/products")
    // step2 receive the response and convert it to JSON
    .then((response) => response.json())
    .then((responseData) => {
      console.log(responseData);

      // step3 create the product list with the code below adapted to the JSON data
      const productListDiv = document.createElement("div");
      productListDiv.classList.add("productList");
      //productList.className = "productList";

      for (let i = 0; i < responseData.products.length; i++) {
        // create product card div
        let productCard = createProductCard(
          responseData.products[i].title,
          responseData.products[i].thumbnail,
          responseData.products[i].description,
          responseData.products[i].price + "$"
        );

        // add the product card to the product list
        productListDiv.appendChild(productCard);
      }
      // add the product list to the body
      document.querySelector("#productDataTarget").appendChild(productListDiv);
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

  const productImg = document.createElement("img");
  productImg.src = productImage;

  const productInfoDiv = document.createElement("div");
  productInfoDiv.classList.add("productInfo");

  const h1ProductTitle = document.createElement("h1");
  h1ProductTitle.innerText = productName;

  const h2productInfo1 = document.createElement("h2");
  h2productInfo1.innerText = productDescription1;

  const h2productInfo2 = document.createElement("h2");
  h2productInfo2.innerText = productDescription2;

  productCardDiv.appendChild(productImg);
  productCardDiv.appendChild(productInfoDiv);
  productInfoDiv.appendChild(h1ProductTitle);
  productInfoDiv.appendChild(h2productInfo1);
  productInfoDiv.appendChild(h2productInfo2);

  return productCardDiv;
}
