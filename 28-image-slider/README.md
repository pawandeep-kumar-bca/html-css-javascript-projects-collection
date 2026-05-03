# 🎯 Product Slider (Horizontal Scroll + Drag)

A modern and interactive **Product Slider UI** built using **HTML, CSS, and JavaScript**.
This project allows users to scroll products using **arrow buttons** as well as **drag (mouse swipe)**.

---

## 🚀 Features

* ✅ Horizontal scrolling product slider
* ✅ Left / Right arrow navigation
* ✅ Drag to scroll (mouse swipe support)
* ✅ Smooth scrolling animation
* ✅ Hidden scrollbar for clean UI
* ✅ Hover animation on product cards
* ✅ Responsive layout

---

## 🛠️ Tech Stack

* **HTML5**
* **CSS3**
* **JavaScript (Vanilla JS)**

---

## 📁 Folder Structure

```id="pslider1"
📦 product-slider
 ┣ 📜 index.html
 ┣ 📜 style.css
 ┣ 📜 app.js
 ┗ 📜 README.md
```

---

## ⚙️ How It Works

### 🔹 1. Arrow Navigation

Clicking arrows scrolls the slider:

```js
slider.scrollBy({ left: 260, behavior: "smooth" });
```

* Left arrow → scroll backward
* Right arrow → scroll forward

---

### 🔹 2. Drag to Scroll

Users can drag with mouse to scroll:

```js
slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  const walk = (x - startX) * 2;
  slider.scrollLeft = scrollLeft - walk;
});
```

---

### 🔹 3. Product Cards

Each card contains:

* Product image
* Product name
* Hover animation (scale effect)

Example structure (from your HTML):\

---

## 🎨 UI Highlights

* Smooth sliding experience
* Clean card-based design
* Hidden scrollbar for better UX
* Hover zoom effect

---

## ⚠️ Improvements (Recommended)

👉 Add these for real-world usage:

* 🔲 Auto-scroll (carousel mode)
* 🔲 Infinite loop slider
* 🔲 Touch support (mobile swipe)
* 🔲 Dynamic data (API आधारित)
* 🔲 Pagination dots

---

## 💡 Advanced Upgrade Ideas

* 🔥 Add category filters
* 🔥 Convert to React component
* 🔥 Add "Add to Cart" button
* 🔥 Connect backend products API

##

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
