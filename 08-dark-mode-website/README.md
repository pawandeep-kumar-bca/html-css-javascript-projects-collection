# 🌙 Dark Mode Portfolio Website

A modern and responsive **personal portfolio website** with a built-in **dark/light mode toggle** using HTML, CSS, and JavaScript. This project demonstrates UI design, theme switching, and local storage usage.

---

## 🚀 Features

* 🌗 Dark / Light mode toggle
* 💾 Theme preference saved using `localStorage`
* 🎨 Clean and modern UI design
* 📱 Fully responsive layout
* 🖼️ Interactive image hover effects
* 🔗 Social media links integration

---

## 🛠️ Tech Stack

* **HTML5** – Structure
* **CSS3** – Styling (Custom Properties / Variables)
* **JavaScript (Vanilla)** – Theme toggle logic
* **Remix Icons** – Icons

---

## 📂 Project Structure

```
project-folder/
│
├── index.html
├── style.css
├── app.js
├── logo.png
├── moon.png
├── sun.png
├── girl.png
├── pattern.png
```

---

## ⚙️ How It Works

* The theme is controlled using CSS variables:

  * `--primary-color`
  * `--secondary-color`

* When user clicks the icon:

  * `dark-theme` class is toggled on `<body>`
  * Theme is stored in `localStorage`

```js
document.body.classList.toggle("dark-theme");
```

* On page load:

  * Saved theme is applied automatically

---

## 💡 Local Storage Logic

```js
localStorage.setItem("theme","dark");
```

* Stores user preference
* Prevents theme reset on refresh

---

## 🖥️ Preview

* Light Mode ☀️
* Dark Mode 🌙
* Smooth transitions & hover animations

---

## 📸 UI Highlights

* Animated hero section
* Image hover effect (background + main image)
* Stylish navigation bar
* Social media icons

---

## 📦 Installation & Setup

1. Clone the repository:

```bash
git clone https://github.com/your-username/dark-mode-portfolio.git
```

2. Open project folder:

```bash
cd dark-mode-portfolio
```

3. Run the project:

* Open `index.html` in browser

---

## 🔧 Customization

You can easily customize:

* Colors → Edit `:root` variables in CSS
* Images → Replace files in assets
* Text → Update content in HTML

---

## 🧠 Learning Outcomes

* CSS Variables (Custom Properties)
* DOM Manipulation
* Event Handling
* Local Storage Usage
* Responsive Design Basics

---

## 📌 Future Improvements

* Add animations (GSAP / Framer Motion)
* Convert to React project
* Add multiple themes
* Connect with backend (contact form)

---

## 🙌 Author

Pawandeep kumar

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!

---
