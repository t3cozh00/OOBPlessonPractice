function getAndCreateProductElements() {
  //console.log("getAndCreateProductElements");

  // Objective1 Add a input field to the html

  //step0 read the searchQuery
  let searchQuery = document.querySelector("input#search").value;
  console.log(searchQuery);
  // step1 send fetch request to dummyJSON
  fetch("https://dummyjson.com/products/search?q=" + searchQuery)
    // step2 receive the response and convert it to JSON
    .then((response) => response.json())
    .then((responseData) => {
      // step3 clear the search results
      const productDataTarget = document.querySelector("div#productDataTarget");
      // set productDataTarget element to empty
      // option1: productDataTarget.innerHTML = "";
      // option2:
      if (productDataTarget.firstChild) {
        productDataTarget.removeChild(productDataTarget.firstChild);
      }

      const productListDiv = document.createElement("div");
      productListDiv.classList.add("productList");

      for (let i = 0; i < responseData.products.length; i++) {
        // create product card div
        let productCard = createProductCard(
          responseData.products[i].title,
          responseData.products[i].thumbnail,
          responseData.products[i].description,
          responseData.products[i].price + " €"
        );

        productListDiv.appendChild(productCard);
      }

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
  productInfoDiv.appendChild(addToCartButton);

  return productCardDiv;
}
