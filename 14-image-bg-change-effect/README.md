# 🖼️ Image Background Change Effect (Before/After Slider)

This project is a simple **Image Comparison Slider** built using **HTML, CSS, and JavaScript**.
It allows users to visually compare two images by sliding a divider horizontally.

---

## 🚀 Features

* 🔄 Interactive image comparison (Before vs After)
* 🖱️ Mouse movement-based slider effect
* 🎯 Smooth and responsive UI
* 💡 Beginner-friendly JavaScript logic
* 📱 Works on different screen sizes

---

## 📂 Project Structure

```
14-image-bg-change-effect/
│
├── index.html
├── style.css
├── app.js
└── background_change_img/
    ├── original.jpg
    ├── transparent.png
    ├── background.png
    └── arrow.png
```

---

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript (Vanilla JS)

---

## ⚙️ How It Works

* The **original image** is placed inside a wrapper (`imgWrap`).
* The wrapper width changes dynamically based on mouse position.
* A vertical **slider line (span)** moves along with the cursor.
* This creates a **before/after reveal effect**.

---

## 📜 JavaScript Logic (Core Idea)

```javascript
let imgBox = document.querySelector(".imgBox");
let imgWrap = document.querySelector(".imgWrap");
let original = document.getElementById("original-img");
let span = document.getElementById("span");

original.style.width = imgBox.offsetWidth + 'px';

let leftSpace = imgBox.offsetLeft;

imgBox.onmousemove = function(e){
    let boxWidth = (e.pageX - leftSpace) + "px";
    imgWrap.style.width = boxWidth;
    span.style.left = boxWidth;
}
```

---

## ▶️ How to Run

1. Download or clone this project
2. Open `index.html` in your browser
3. Move your mouse over the image to see the effect

---

## 💡 Use Cases

* Photo editing comparison
* Before/After transformations
* UI showcase projects
* Portfolio projects

---

## 📌 Future Improvements

* Add touch support for mobile 📱
* Add smooth animation transitions
* Add vertical slider option
* Add multiple image comparison

---

## 🙌 Author

Created by **Pawandeep Kumar**
💻 Beginner Web Developer

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub and share with others!

---
