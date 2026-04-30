# 🎯 Custom Select Menu UI

A simple and elegant **Custom Dropdown / Select Menu** built using **HTML, CSS, and JavaScript**.
This project replaces the default `<select>` element with a modern, fully customizable UI.

---

## 🚀 Features

* ✅ Custom dropdown UI (not default browser select)
* ✅ Smooth open/close interaction
* ✅ Dynamic text update on selection
* ✅ Icon support using Remix Icons
* ✅ Clean and minimal design
* ✅ Beginner-friendly JavaScript logic

---

## 🛠️ Tech Stack

* **HTML5**
* **CSS3**
* **JavaScript (Vanilla JS)**
* **Remix Icons**

---

## 📁 Folder Structure

```id="str123"
📦 select-menu
 ┣ 📜 index.html
 ┣ 📜 style.css
 ┣ 📜 app.js
 ┗ 📜 README.md
```

---

## ⚙️ How It Works

### 🔹 1. Dropdown Toggle

Clicking the select field toggles the dropdown:

```js
selectFiled.onclick = function(){
    list.classList.toggle("hide");
    arrow.classList.toggle("rotate")
}
```

---

### 🔹 2. Option Selection

When user clicks an option:

* Selected text updates
* Dropdown closes automatically

```js
option.onclick = function(){
    selectText.innerHTML = this.textContent;
    list.classList.toggle("hide");
    arrow.classList.toggle("rotate")
}
```

---

## 🎨 UI Behavior

* Arrow rotates on open/close
* Options highlight on hover
* Smooth visibility toggle using `.hide` class

---

## 💡 Future Improvements

* 🔲 Add keyboard navigation (accessibility)
* 🔲 Close dropdown when clicking outside
* 🔲 Add animation (fade/slide)
* 🔲 Convert into reusable component
* 🔲 Add multiple selection support

---

## 🙌 Author

**Pawandeep Kumar**

---

## ⭐ Support

If you like this project:

* Star ⭐ the repo
* Use it in your portfolio
* Share with others

---

## 📌 License

Free to use and modify.
