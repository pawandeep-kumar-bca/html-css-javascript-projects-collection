# 🔔 Toast Notification Web App

A simple and interactive **Toast Notification (Snackbar)** application built using **HTML, CSS, and JavaScript**. This project displays beautiful success, error, and warning notifications with smooth animations and auto-dismiss functionality.

---

## 🚀 Features

* ✅ Success notification
* ✅ Error notification
* ✅ Warning/Invalid notification
* ✅ Auto-hide after a few seconds
* ✅ Smooth slide-in animation
* ✅ Progress indicator bar
* ✅ Clean and responsive UI
* ✅ Lightweight and beginner-friendly

---

## 🛠️ Tech Stack

* **HTML5**
* **CSS3**
* **JavaScript (Vanilla JS)**
* **Remix Icons**

---

## 📁 Folder Structure

```text
📦 toast-notification-app
 ┣ 📜 index.html
 ┣ 📜 style.css
 ┣ 📜 app.js
 ┗ 📜 README.md
```

---

## ⚙️ How It Works

### 🔹 1. Create Toast Notification

A new notification element is dynamically created:

```js
let toast = document.createElement("div");
toast.classList.add("toast");
```

* Generates a notification box
* Appends it to the toast container

---

### 🔹 2. Display Different Messages

Notifications can display different types of messages:

```js
showToast(successMsg);
showToast(errorMsg);
showToast(invalidMsg);
```

* Success notification
* Error notification
* Warning notification

---

### 🔹 3. Auto Remove Notification

Notifications disappear automatically:

```js
setTimeout(() => {
    toast.remove();
}, 6000);
```

* Keeps the UI clean
* Prevents notification stacking

---

### 🔹 4. Dynamic Styling

Toast type is detected and styled accordingly:

```js
if(msg.includes('error')){
    toast.classList.add("error");
}
```

* Green → Success
* Red → Error
* Orange → Warning

---

## 🎨 UI Highlights

* Modern notification design
* Smooth slide-in animation
* Animated progress bar
* Icon-based feedback
* Bottom-right notification stack
* Responsive layout

---

## 🎬 Animations Used

### Slide-In Animation

```css
animation: moveLeft 0.5s linear forwards;
```

* Toast enters smoothly from the right side

### Progress Bar Animation

```css
animation: anim 5s linear forwards;
```

* Indicates remaining display time

---


## 💡 Advanced Upgrade Ideas

* 🔥 React Toast Component
* 🔥 Notification Manager System
* 🔥 Custom Themes
* 🔥 API Response Notifications
* 🔥 LocalStorage Notification History
* 🔥 Reusable NPM Package

---

## 📚 Learning Concepts

This project helps you learn:

* DOM Manipulation
* Dynamic Element Creation
* Event Handling
* CSS Animations
* CSS Keyframes
* JavaScript Timers
* Conditional Rendering
* UI Feedback Systems

---

## 🙌 Author

**Pawandeep Kumar**

---

## ⭐ Support

If you like this project:

* Star ⭐ the repository
* Add it to your portfolio
* Share it with others

---

## 📌 License

Free to use and modify for learning and personal projects.
