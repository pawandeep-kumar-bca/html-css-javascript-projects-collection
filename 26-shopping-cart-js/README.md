# 🛒 Clothing Store - Shopping Cart (Vanilla JavaScript)

A fully functional **E-commerce Shopping Cart Web App** built using **HTML, CSS, and Vanilla JavaScript**.
This project demonstrates real-world cart logic including adding items, updating quantity, removing products, and calculating total price with persistent storage.

---

## 🚀 Features

* ✅ Dynamic Product Rendering (JS आधारित)
* ✅ Add to Cart / Remove Item
* ✅ Increase / Decrease Quantity (+ / -)
* ✅ Cart Data Stored in LocalStorage
* ✅ Real-time Cart Counter (Navbar)
* ✅ Total Bill Calculation
* ✅ Empty Cart UI
* ✅ Responsive Design (Grid आधारित)

---

## 🛠️ Tech Stack

* **HTML5**
* **CSS3**
* **JavaScript (Vanilla JS)**
* **LocalStorage API**
* **Remix Icons**

---

## 📁 Folder Structure

```id="f2ld3"
📦 clothing-store
 ┣ 📂 images
 ┣ 📂 src
 ┃ ┣ 📜 style.css
 ┃ ┣ 📜 data.js
 ┃ ┣ 📜 app.js
 ┃ ┗ 📜 cart.js
 ┣ 📜 index.html
 ┣ 📜 cart.html
 ┗ 📜 README.md
```

---

## ⚙️ How It Works

### 🔹 1. Product Rendering

Products dynamically load from `data.js`:

```js
shop.innerHTML = shopItemsData.map((x) => { ... }).join("");
```

---

### 🔹 2. Add to Cart

* ➕ Button increases quantity
* Data stored in `localStorage`

---

### 🔹 3. Remove / Decrease Item

* ➖ decreases quantity
* ❌ removes item when quantity = 0

---

### 🔹 4. Cart Page

Displays:

* Product Image
* Name
* Quantity
* Price
* Total per item

---

### 🔹 5. Cart Counter

```js
let count = basket.reduce((x, y) => x + y.item, 0);
```

---

### 🔹 6. Total Bill

```js
let amount = basket.reduce((x, y) => {
  let item = shopItemsData.find((z) => z.id === y.id);
  return x + y.item * item.price;
}, 0);
```

---

## 🎨 UI Features

* Clean product cards
* Interactive cart buttons
* Dynamic cart badge 🔴
* Responsive grid system

---



## 💡 Future Improvements

* 🔲 User Authentication (Login / Signup)
* 🔲 Backend Integration (Node.js + Express)
* 🔲 Database (MongoDB)
* 🔲 Payment Gateway (Razorpay / Stripe)
* 🔲 Product Search & Filters
* 🔲 Wishlist Feature

---

## 🙌 Author

**Pawandeep Kumar**

---

## ⭐ Support

If you like this project:

* Star ⭐ the repo
* Add it to your portfolio
* Share with others

---

## 📌 License

Free to use and modify.
