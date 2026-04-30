# 🍽️ Recipe / Restaurant Web App

A modern, responsive **Restaurant / Recipe Web Application UI** built using **HTML, SCSS (CSS), and JavaScript**.
This project showcases a clean UI, interactive components, and mobile-first responsive design.

---

## 🚀 Features

* ✅ Responsive Design (Mobile → Tablet → Desktop)
* ✅ Interactive Navbar with Hamburger Menu
* ✅ Dynamic Hero Section (Dish Selection)
* ✅ Popular Dishes Slider (Horizontal Scroll)
* ✅ Smooth UI Animations
* ✅ Reusable Components (Buttons, Cards)
* ✅ Clean SCSS Structure with Variables & Mixins

---

## 🛠️ Tech Stack

* **HTML5**
* **SCSS (SASS)** 
* **JavaScript (Vanilla JS)**
* **Remix Icons**
* **Google Fonts (Montserrat & Roboto)**

---

## 📁 Folder Structure

```
📦 project
 ┣ 📂 images
 ┣ 📜 index.html
 ┣ 📜 style.scss
 ┣ 📜 query.scss
 ┣ 📜 app.js
 ┗ 📜 README.md
```

---

## ⚙️ How It Works

### 🔹 1. Navbar Toggle (Mobile Menu)

* Hamburger click → Menu opens
* Click again → Menu closes
* Uses animation (`slideDown`, `slideUp`)

---

### 🔹 2. Dynamic Dish Selection

* Default dish image loads on page
* Clicking buttons updates main image dynamically

```js
rightTwo.addEventListener("click", handleDishClick);
```

---

### 🔹 3. Popular Dishes Slider

* Cards generated dynamically using JS
* Horizontal scroll with hidden scrollbar
* Includes:

  * Image
  * Rating ⭐
  * Description
  * Price
  * Add to Cart button

---

## 🎨 SCSS Highlights

* Variables for colors & fonts
* Reusable mixins:

```scss
@mixin button1 { ... }
@mixin button2 { ... }
```

* Nested styling for clean structure
* Mobile-first responsive approach

---

## 📱 Responsive Breakpoints

* Mobile: Default
* Tablet/Desktop: `@media (min-width: 942px)`

---

## ⚠️ Known Issues / Fixes

👉 Fix this small bug in your JS:

```js
let rightSlide = document.querySelector("#rightSlider");
```

(Currently you wrote `#rightSlide` ❌)

---

## 💡 Future Improvements

* 🔲 Add backend (MERN Stack)
* 🔲 Add cart functionality
* 🔲 Add authentication (Login/Signup)
* 🔲 Connect real food API
* 🔲 Add search functionality
* 🔲 Add payment integration


---

## 🙌 Author

**Pawandeep Kumar**

---

## ⭐ Support

If you like this project:

* Star ⭐ the repo
* Share with friends
* Use it in your portfolio

---

## 📌 License

This project is open-source and free to use.
