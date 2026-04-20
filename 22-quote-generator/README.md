# 💬 Quote Generator

A beautiful and interactive **Quote Generator Web App** built using **HTML, CSS, and JavaScript**.
This app fetches random quotes from an API and allows users to share them on Twitter.

---

## 🚀 Features

* 📜 Fetch random quotes using API
* ✍️ Display quote with author name
* 🔄 Generate new quote on button click
* 🐦 Share quote directly on Twitter
* 🎨 Clean and modern UI design

---

## 🛠️ Tech Stack

* HTML5
* CSS3
* JavaScript (Vanilla JS)
* Quotes API (vercel hosted API)
* Remix Icon (for Twitter icon)

---

## 📂 Project Structure

```id="m2q8w1"
📁 quote-generator
 ├── index.html
 ├── style.css
 └── app.js
```

---

## ⚙️ How It Works

* On page load → a quote is fetched from API
* Clicking **New Quote** → fetches a new random quote
* Clicking **Tweet** → opens Twitter with pre-filled quote

---

## 🧩 Core Logic

### 1. Fetch Quote from API

```javascript id="k9x3d2"
const response = await fetch(url);
const result = await response.json();
```

### 2. Display Quote

```javascript id="p4t8v6"
quote.innerHTML = result.quote;
author.innerHTML = result.author;
```

### 3. Tweet Functionality

```javascript id="r7y1z5"
window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML);
```

---

## ▶️ How to Run

1. Download or clone the project
2. Open folder in VS Code
3. Run `index.html` in browser

---

## 💡 Learning Outcomes

* Working with APIs (fetch + async/await)
* DOM Manipulation
* Event Handling
* External API Integration
* Social Sharing (Twitter Intent API)

---

## 📌 Future Improvements

* Add loading spinner ⏳
* Save favorite quotes ❤️
* Copy to clipboard feature 📋
* Add categories (motivation, life, success)
* Dark mode toggle 🌙

---

## 👨‍💻 Author

**Pawandeep Kumar**
Aspiring MERN Stack Developer 🚀

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub and share it!

---
