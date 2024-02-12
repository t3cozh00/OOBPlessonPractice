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
