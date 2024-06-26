// see products in the cart
// some element we can click, then we can go to the cart
// click "shopping cart", show the shopping cart contents
// remove all the elements on the screen
// all the 'uiContent' will be taken away
class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(product) {
    this.items.push(product);
  }
  // filter the items array and keep those elements that are not equal to product
  removeItem(product) {
    this.items = this.items.filter((item) => item != product);
  }

  getItems() {
    return this.items;
  }

  getTotal() {
    return this.items.reduce((acc, item) => acc + item.price, 0);
  }
}

class Product {
  #id;
  #name;
  #price;
  #quantity;

  constructor(id, name, price, quantity) {
    this.#id = id;
    this.#name = name;
    this.#price = price;
    this.#quantity = quantity;
  }

  increaseQuantity() {
    this.#quantity++;
  }

  decreaseQuantity() {
    this.#quantity--;
  }

  get id() {
    return this.#id;
  }

  get name() {
    return this.#name;
  }

  get quantity() {
    return this.#quantity;
  }

  get price() {
    return this.#price;
  }

  getTotalPrice() {
    return this.#price * this.#quantity;
  }
}

const cart = new ShoppingCart();

function getAndCreateProductElements() {
  //console.log("getAndCreateProductElements");

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
          responseData.products[i].id,
          responseData.products[i].title,
          responseData.products[i].thumbnail,
          responseData.products[i].description,
          // convert price to number
          parseFloat(responseData.products[i].price)
        );

        productListDiv.appendChild(productCard);
      }

      document.querySelector("#productDataTarget").appendChild(productListDiv);
    });
}

function createProductCard(
  productId,
  productName,
  productImage,
  productDescription1,
  productPrice
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
  h2productInfo2.innerText = productPrice + "€";

  const addToCartButton = document.createElement("button");
  addToCartButton.innerText = "Add to Cart";
  addToCartButton.addEventListener("click", function () {
    console.log("Add to cart:" + productName);
    // create product
    const product = new Product(productId, productName, productPrice, 1);
    // add product to the cart
    cart.addItem(product);
    // add name, quantity, price, id
  });

  productCardDiv.appendChild(productImg);
  productCardDiv.appendChild(productInfoDiv);
  productInfoDiv.appendChild(h1ProductTitle);
  productInfoDiv.appendChild(h2productInfo1);
  productInfoDiv.appendChild(h2productInfo2);
  productInfoDiv.appendChild(addToCartButton);

  return productCardDiv;
}

function openShoppingCart() {
  const uiContentElement = document.querySelector("div#uiContent");
  uiContentElement.innerHTML = "";

  const shoppingCartTable = document.createElement("table");

  const thead = document.createElement("thead");
  const theadRow = document.createElement("tr");
  const itemNameTh = document.createElement("th");
  const itemPriceTh = document.createElement("th");
  const itemQuantityTh = document.createElement("th");
  const itemTotalPriceTh = document.createElement("th");

  itemNameTh.innerText = "Name";
  itemPriceTh.innerText = "Price";
  itemQuantityTh.innerText = "Quantity";
  itemTotalPriceTh.innerText = "Total Price";

  shoppingCartTable.appendChild(thead);
  thead.appendChild(theadRow);
  theadRow.appendChild(itemNameTh);
  theadRow.appendChild(itemPriceTh);
  theadRow.appendChild(itemQuantityTh);
  theadRow.appendChild(itemTotalPriceTh);

  const tbody = document.createElement("tbody");

  const cartItems = cart.getItems();
  for (let i = 0; i < cartItems.length; i++) {
    const row = document.createElement("tr");

    const itemNameTd = document.createElement("td");
    const itemPriceTd = document.createElement("td");
    const itemQuantityTd = document.createElement("td");
    const itemTotalPriceTd = document.createElement("td");

    itemNameTd.innerText = cartItems[i].name;
    itemPriceTd.innerText = cartItems[i].price;
    itemQuantityTd.innerText = cartItems[i].quantity;
    itemTotalPriceTd.innerText = cartItems[i].getTotalPrice();

    row.appendChild(itemNameTd);
    row.appendChild(itemPriceTd);
    row.appendChild(itemQuantityTd);
    row.appendChild(itemTotalPriceTd);

    tbody.appendChild(row);
  }
  shoppingCartTable.appendChild(tbody);
  uiContentElement.appendChild(shoppingCartTable);
}
