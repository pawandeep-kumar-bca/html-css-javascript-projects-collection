# 📩 Form Validation Project

A simple and responsive **Form Validation Web App** built using **HTML, CSS, and JavaScript**.
This project validates user input fields like Name, Phone, Email, and Message in real-time.

---

## 🚀 Features

* ✅ Real-time input validation
* ✅ Error messages for invalid inputs
* ✅ Success indicator (✔ icon)
* ✅ Minimum character validation for message
* ✅ Clean and responsive UI
* ✅ Prevents form submission if errors exist

---

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript (Vanilla JS)
* Remix Icons (for UI icons)

---

## 📂 Project Structure

```
project-folder/
│
├── index.html     # Main HTML file
├── style.css      # Styling file
├── app.js         # JavaScript validation logic
└── README.md      # Project documentation
```

---

## 📋 Validation Rules

### 👤 Name

* Cannot be empty
* Must contain first and last name (e.g., John Doe)

### 📱 Phone Number

* Must be 10 digits
* Only numeric values allowed

### 📧 Email

* Must follow proper email format
* Example: [example@gmail.com](mailto:example@gmail.com)

### 💬 Message

* Minimum 30 characters required

---

## ⚙️ How It Works

* Each input field triggers validation using `onkeyup` event
* If input is invalid → error message is shown
* If valid → ✔ icon appears
* On submit → all validations are checked
* If any field is invalid → submission is blocked

---

## ▶️ How to Run

1. Download or clone the repository
2. Open the project folder
3. Run `index.html` in your browser

---

## 📸 Demo Behavior

* Typing incorrect input → shows error
* Typing correct input → shows green check icon
* Clicking submit with errors → shows "Please fix error"

---

## 🧠 Learning Outcomes

* DOM manipulation
* Form validation logic
* Regular expressions (Regex)
* Event handling in JavaScript

---

## 💡 Future Improvements

* Add backend integration (Node.js / Firebase)
* Store form data in database
* Add better UI/UX animations
* Mobile-first improvements

---

## 🙌 Author

**Pawandeep Kumar**
Frontend Developer (Learning Phase 🚀)

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
