# 📱 Responsive Navbar

A modern and fully **Responsive Navigation Bar** built using **HTML, CSS, and JavaScript**.
This project includes a desktop navigation menu, dropdown functionality, and a mobile-friendly hamburger menu.

---

## 🚀 Features

* 📌 Responsive Navbar (Desktop + Mobile)
* 🍔 Hamburger Menu for small screens
* 📂 Dropdown Menu (Services section)
* 🎨 Smooth animations & transitions
* ⚡ Toggle navigation with JavaScript
* 📱 Mobile-first behavior with dynamic class handling

---

## 🛠️ Tech Stack

* HTML5
* CSS3 (Flexbox + Animations)
* JavaScript (Vanilla JS)

---

## 📂 Project Structure

```id="g7h2k1"
📁 responsive-navbar
 ├── index.html
 ├── style.css
 └── app.js
```

---

## ⚙️ How It Works

* Navbar changes based on screen size:

  * Desktop → Horizontal menu
  * Mobile → Full-screen menu with hamburger icon

* JavaScript automatically detects screen width and adds/removes `mobile` class

* Clicking hamburger:

  * Opens menu
  * Animates icon (bars → cross)

---

## 🧩 Core Logic

### 1. Responsive Class Handling

```javascript id="r2k9m4"
if (window.innerWidth < 860) {
  document.body.classList.add("mobile");
}
```

### 2. Hamburger Toggle

```javascript id="t8p3x5"
mobileNav.classList.toggle("open");
```

### 3. Icon Animation

```javascript id="y6z1q8"
bars[0].style.transform = "rotate(45deg)";
bars[1].style.opacity = "0";
bars[2].style.transform = "rotate(-45deg)";
```

---

## ▶️ How to Run

1. Download or clone the project
2. Open folder in VS Code
3. Run `index.html` in browser
4. Resize screen to see responsive behavior

---

## 💡 Learning Outcomes

* Responsive Design Principles
* Flexbox Layout
* Media Handling with JavaScript
* DOM Manipulation
* CSS Animations & Transitions
* Mobile Navigation Design

---

## 📌 Future Improvements

* Add smooth slide animation for menu
* Close menu on link click
* Add dark/light mode toggle 🌙
* Improve accessibility (ARIA attributes)
* Add active link highlight based on page

---

## 👨‍💻 Author

**Pawandeep Kumar**
Aspiring MERN Stack Developer 🚀

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub and share it!

---
