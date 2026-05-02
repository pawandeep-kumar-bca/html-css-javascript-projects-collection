# 🔐 Password Strength Checker

A simple and interactive **Password Strength Indicator** built using **HTML, CSS, and JavaScript**.
This project helps users understand how strong their password is in real-time.

---

## 🚀 Features

* ✅ Real-time password strength detection
* ✅ Displays Weak / Medium / Strong levels
* ✅ Dynamic color feedback (border + text)
* ✅ Clean and minimal UI
* ✅ Beginner-friendly logic

---

## 🛠️ Tech Stack

* **HTML5**
* **CSS3**
* **JavaScript (Vanilla JS)**

---

## 📁 Folder Structure

```id="ps1"
📦 password-strength
 ┣ 📜 index.html
 ┣ 📜 style.css
 ┣ 📜 app.js
 ┗ 📜 README.md
```

---

## ⚙️ How It Works

### 🔹 1. Input Detection

* Listens to user input using `input` event
* Shows message only when user starts typing

```js id="ps2"
password.addEventListener("input", () => { ... });
```

---

### 🔹 2. Strength Logic

Password strength is calculated based on length:

* 🔴 **Weak** → less than 4 characters
* 🟡 **Medium** → 4 to 7 characters
* 🟢 **Strong** → 8 or more characters

---

### 🔹 3. Dynamic UI Update

* Border color changes based on strength
* Message color updates dynamically

---

## 🎨 UI Behavior

* Hidden message initially
* Appears on typing
* Color feedback improves UX

---

## ⚠️ Improvement Suggestion

👉 Current logic only checks **length**

### Upgrade it with:

* ✔ Uppercase letters check
* ✔ Numbers check
* ✔ Special characters (!@#$)
* ✔ Real security scoring system

---

## 💡 Advanced Version Idea

Make it like real apps:

* 🔲 Show password toggle (👁️ icon)
* 🔲 Strength progress bar
* 🔲 Suggestions (e.g., "Add a number")
* 🔲 Regex-based validation

---

## 🙌 Author

**Pawandeep Kumar**

---

## ⭐ Support

If you like this project:

* Star ⭐ the repo
* Add to portfolio
* Share with others

---

## 📌 License

Free to use and modify.
