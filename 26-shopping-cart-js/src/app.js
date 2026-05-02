let shop = document.getElementById("shop");
let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateShop = () => {
  shop.innerHTML = shopItemsData.map((x) => {
    let { id, name, price, desc, img } = x;

    let search = basket.find((item) => item.id === id) || { item: 0 };

    return `
    <div id="product-id-${id}" class="item">
      <img src="${img}" width="220">
      <div class="details">
        <h3>${name}</h3>
        <p>${desc}</p>

        <div class="price-quantity">
          <h2>$ ${price}</h2>

          <div class="buttons">
            <i class="ri-subtract-fill" onclick="decrement('${id}')"></i>
            <div id="${id}" class="quantity">${search.item}</div>
            <i class="ri-add-fill" onclick="increment('${id}')"></i>
          </div>

        </div>
      </div>
    </div>
    `;
  }).join("");
};

generateShop();

function increment(id) {
  let search = basket.find((x) => x.id === id);

  if (!search) {
    basket.push({ id: id, item: 1 });
  } else {
    search.item += 1;
  }

  update(id);
}

function decrement(id) {
  let search = basket.find((x) => x.id === id);

  if (!search || search.item === 0) return;

  search.item -= 1;
  basket = basket.filter((x) => x.item !== 0);

  update(id);
}

function update(id) {
  let search = basket.find((x) => x.id === id);

  document.getElementById(id).innerHTML = search ? search.item : 0;

  localStorage.setItem("data", JSON.stringify(basket));
  calculation();
}

function calculation() {
  let cartIcon = document.getElementById("cartAmount");
  let count = basket.reduce((x, y) => x + y.item, 0);
  cartIcon.innerHTML = count;
}

calculation();