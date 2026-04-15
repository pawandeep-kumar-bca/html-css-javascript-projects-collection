# 🖼️ Image Gallery Slider (Horizontal Scroll)

This project is a modern **Image Gallery Slider** built using **HTML, CSS, and JavaScript**.
It allows users to scroll through images horizontally using **mouse wheel** and **navigation buttons**.

---

## 🚀 Features

* 🎯 Horizontal scrolling image gallery
* 🖱️ Mouse wheel scroll support
* ⬅️➡️ Next & Previous navigation buttons
* 🎨 Hover effects (zoom + grayscale removal)
* ⚡ Smooth scrolling animation
* 📱 Responsive and clean UI

---

## 📂 Project Structure

```
15-image-gallery/
│
├── index.html
├── style.css
├── app.js
└── images/
    ├── image-1.png
    ├── image-2.png
    ├── image-3.png
    ├── image-4.png
    ├── image-5.png
    ├── image-6.png
    ├── back.png
    └── next.png
```

---

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript (Vanilla JS)
* Remix Icons (CDN)

---

## ⚙️ How It Works

* Images are arranged in a **horizontal flex container**.
* Scroll is controlled using:

  * Mouse wheel (`wheel` event)
  * Navigation buttons (`Next` and `Back`)
* Images have a **grayscale filter by default**.
* On hover:

  * Grayscale is removed 🎨
  * Image zooms slightly 🔍

---

## 📜 JavaScript Logic (Core Idea)

```javascript
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");
let scrollContainer = document.querySelector(".gallery");

scrollContainer.addEventListener("wheel", (e) => {
    e.preventDefault();
    scrollContainer.scrollLeft += e.deltaY;
    scrollContainer.style.scrollBehavior = "auto";
});

nextBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 900;
});

backBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 900;
});
```

---

## ▶️ How to Run

1. Download or clone the project
2. Open `index.html` in your browser
3. Use:

   * Mouse scroll 🖱️
   * Arrow buttons ⬅️➡️

to navigate images

---

## 💡 Use Cases

* Portfolio gallery
* Product showcase
* Photography websites
* UI/UX projects

---

## 📌 Future Improvements

* Add touch swipe support 📱
* Add autoplay slider
* Add lightbox preview on click
* Add dynamic image loading

---

## 🙌 Author

Created by **Pawandeep Kumar**
💻 Aspiring Web Developer

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub and share it!

---
