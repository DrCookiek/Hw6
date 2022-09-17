let products = [
  [1, "Frog Hat", 5],
  [2, "Bunny Hat", 4],
  [3, "Lion Hat", 6],
  [4, "Chicken Hat", 10],
  [5, "Flower Hat", 3],
  [6, "Pirate Full Costume", 15],
];
let shoppingCart = [];
function addToCart(productID) {
  shoppingCart.push(products[productID - 1]);
  renderCartFromArray();
}
function renderCartFromArray() {
  document.getElementById("shoppingCart").innerHTML = ""; //removes all the HTML content.
  for (let i = 0; i < shoppingCart.length; i++) {
    let productHTML = document.createElement("div");
    let productDescription = document.createTextNode(
      shoppingCart[i][1] + " costs " + shoppingCart[i][2] + "$"
    );
    let removeBtn = document.createElement("button");

    removeBtn.setAttribute(
      "onclick",
      "removeProduct(" + shoppingCart[i][0] + ")"
    ); //sets an attribute to the button
    removeBtn.textContent = "remove";
    productHTML.appendChild(productDescription);
    productHTML.appendChild(removeBtn);

    document.getElementById("shoppingCart").appendChild(productHTML);
  }
}
function removeProduct(product) {
  let j = 0;
  for (let i = 0; i < shoppingCart.length && j < 1; i++) {
    if (shoppingCart[i][0] == product) {
      shoppingCart.splice(i, 1); //removes the array item i.
      renderCartFromArray();
      j++;
    }
  }
}
