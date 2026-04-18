# 🔳 QR Code Generator

A simple and responsive **QR Code Generator Web App** built using **HTML, CSS, and JavaScript**.
Users can enter any text or URL and instantly generate a QR code.

---

## 🚀 Features

* 🔤 Convert text or URL into QR code
* ⚡ Instant QR generation using API
* 📱 Responsive and clean UI
* ❌ Error animation for empty input
* 🎯 Simple and beginner-friendly project

---

## 🛠️ Tech Stack

* HTML5
* CSS3
* JavaScript (Vanilla JS)
* QR Code API (api.qrserver.com)

---

## 📂 Project Structure

```id="v2k93n"
📁 qr-code-generator
 ├── index.html
 ├── style.css
 └── app.js
```

---

## ⚙️ How It Works

* User enters text or URL in input field
* On clicking **Generate QR Code**:

  * If input is not empty → QR code is generated using API
  * If input is empty → input box shakes (error animation)

### Example Logic:

```javascript id="x91kz7"
qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
```

---

## ▶️ How to Run

1. Download or clone the project
2. Open folder in VS Code
3. Run `index.html` in browser

---

## 💡 Learning Outcomes

* DOM Manipulation
* API Integration (GET request)
* Event Handling
* CSS Animations (Shake effect)
* Dynamic Image Rendering

---

## 📌 Future Improvements

* Download QR Code option
* Change QR size dynamically
* Add color customization
* Save QR history

---

## 👨‍💻 Author

**Pawandeep Kumar**
Aspiring MERN Stack Developer 🚀

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub and share it!

---
