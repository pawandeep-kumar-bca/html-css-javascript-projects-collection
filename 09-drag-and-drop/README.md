# 🎯 Drag & Drop List Web App

A simple and interactive **Drag & Drop web application** built using HTML, CSS, and JavaScript. This project allows users to move list items between two containers using native drag-and-drop functionality.

---

## 🚀 Features

* 🖱️ Drag & Drop functionality
* 📦 Move items between containers
* ⚡ Real-time UI interaction
* 🎨 Clean and minimal design
* 🧩 Built with pure JavaScript (no libraries)

---

## 🛠️ Tech Stack

* **HTML5** – Structure & Drag API
* **CSS3** – Styling & layout
* **JavaScript (Vanilla)** – Drag & Drop logic

---

## 📂 Project Structure

```
project-folder/
│
├── index.html
├── style.css
├── app.js
├── drag_drop_icon.png
```

---

## ⚙️ How It Works

* Each list item has:

```html
draggable="true"
```

* JavaScript handles drag events:

  * `dragstart` → Select item
  * `dragover` → Allow drop
  * `drop` → Move item

```js
list.addEventListener("dragstart", function(e){
    let selected = e.target;
});
```

* Items can be moved:

  * From left → right
  * From right → left

---

## 💡 Core Logic

```js
right.addEventListener("drop", function(e){
    right.appendChild(selected);
});
```

* The selected element is appended to the target container
* `e.preventDefault()` is required for drop to work

---

## 🖥️ UI Overview

* Two boxes:

  * **Left Container** → Default items
  * **Right Container** → Drop area

* Drag items between both sections easily

---

## 📦 Installation & Setup

1. Clone the repository:

```bash
git clone https://github.com/your-username/drag-drop-list.git
```

2. Open project folder:

```bash
cd drag-drop-list
```

3. Run the project:

* Open `index.html` in browser

---

## 🔧 Customization

You can customize:

* Colors → Update CSS
* Item text → Modify HTML
* Add more lists → Duplicate `.list` elements

---

## 🧠 Learning Outcomes

* HTML Drag and Drop API
* Event Listeners (`dragstart`, `dragover`, `drop`)
* DOM Manipulation
* User Interaction Handling

---

## 📌 Future Improvements

* Add drag animation effects
* Enable sorting inside container
* Add multiple containers
* Convert to React Drag & Drop (DND Kit)

---

## 🙌 Author

**Pawandeep Kumar**

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!

---
