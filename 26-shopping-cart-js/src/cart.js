let label = document.getElementById("label");
let shopping_cart = document.getElementById("shopping_cart");

let basket = JSON.parse(localStorage.getItem("data")) || [];

// ✅ FIX: function ऊपर define
function totalAmount() {
  let amount = basket.reduce((x, y) => {
    let item = shopItemsData.find((z) => z.id === y.id);
    return x + y.item * item.price;
  }, 0);

  label.innerHTML = `
    <h2>Total Bill : $ ${amount}</h2>
    <button class="checkout">Check Out</button>
    <button class="RemoveAll" onclick="clearCart()">Clear Cart</button>
  `;
}

function calculation() {
  let cartIcon = document.getElementById("cartAmount");
  let count = basket.reduce((x, y) => x + y.item, 0);
  cartIcon.innerHTML = count;
}

function generateCartItem() {
  if (basket.length === 0) {
    label.innerHTML = `
      <h2>Cart is Empty</h2>
      <a href="index.html"><button class="homeBtn">Back to Home</button></a>
    `;
    shopping_cart.innerHTML = "";
    return;
  }

  shopping_cart.innerHTML = basket
    .map((x) => {
      let { id, item } = x;
      let search = shopItemsData.find((y) => y.id === id);

      return `
      <div class="cart-item">
        <img src="${search.img}">
        <div class="details">

          <div class="title-price-x">
            <h4 class="title-price">
              <p>${search.name}</p>
              <p class="cart-item-price">$ ${search.price}</p>
            </h4>
            <i class="ri-close-large-line" onclick="removeItem('${id}')"></i>
          </div>

          <div class="buttons">
            <i class="ri-subtract-fill" onclick="decrement('${id}')"></i>
            <div class="quantity">${item}</div>
            <i class="ri-add-fill" onclick="increment('${id}')"></i>
          </div>

          <h3>$ ${item * search.price}</h3>
        </div>
      </div>
    `;
    })
    .join("");

  totalAmount();
}

function increment(id) {
  let search = basket.find((x) => x.id === id);

  if (!search) {
    basket.push({ id: id, item: 1 });
  } else {
    search.item += 1;
  }

  update();
}

function decrement(id) {
  let search = basket.find((x) => x.id === id);

  if (!search || search.item === 0) return;

  search.item -= 1;
  basket = basket.filter((x) => x.item !== 0);

  update();
}

function removeItem(id) {
  basket = basket.filter((x) => x.id !== id);
  update();
}

function clearCart() {
  basket = [];
  update();
}

function update() {
  localStorage.setItem("data", JSON.stringify(basket));
  generateCartItem();
  calculation();
}

// 🔥 Start
generateCartItem();
calculation();
