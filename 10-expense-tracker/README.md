# 💰 Expense Tracker Web App

A clean and responsive **Expense Tracker application** built using HTML, CSS, and JavaScript. This app helps users track their income and expenses, calculate balance, and store data locally using browser storage.

---

## 🚀 Features

* ➕ Add income & expense transactions
* ➖ Delete transactions
* 💰 Real-time balance calculation
* 📊 Income & expense summary
* 💾 Data stored using `localStorage`
* 🎨 Modern UI with smooth animations
* 📱 Fully responsive design

---

## 🛠️ Tech Stack

* **HTML5** – Structure
* **CSS3** – Styling & responsive layout
* **JavaScript (Vanilla)** – Logic & DOM manipulation
* **LocalStorage API** – Data persistence

---

## 📂 Project Structure

```
project-folder/
│
├── index.html
├── style.css
├── app.js
```

---

## ⚙️ How It Works

* User enters:

  * Description
  * Amount (positive = income, negative = expense)

* On submit:

  * Transaction is added to array
  * Stored in `localStorage`
  * UI updates instantly

---

## 💡 Core Functionalities

### ➤ Add Transaction

```js
transactions.push({
  id: Date.now(),
  description,
  amount,
});
```

### ➤ Calculate Balance

```js
const balance = transactions.reduce((acc, t) => acc + t.amount, 0);
```

### ➤ Filter Income & Expenses

```js
const income = transactions
  .filter(t => t.amount > 0)
  .reduce((acc, t) => acc + t.amount, 0);
```

---

## 💾 Local Storage

```js
localStorage.setItem("transactions", JSON.stringify(transactions));
```

* Saves all transactions
* Data persists after refresh

---

## 🖥️ UI Highlights

* Gradient background design
* Smooth card layout & shadows
* Scrollable transaction list
* Hover effects on transactions
* Animated entry effect

---

## 🎨 Styling Highlights

Your CSS includes:

* Modern gradients
* Card-based UI
* Responsive grid layout
* Smooth animations

📌 Refer full styling here: 

---

## 📦 Installation & Setup

1. Clone the repository:

```bash
git clone https://github.com/your-username/expense-tracker.git
```

2. Open project folder:

```bash
cd expense-tracker
```

3. Run the project:

* Open `index.html` in browser

---

## 🔧 Customization

You can easily customize:

* Currency → Change in `formatCurrency()`
* Colors → Edit CSS variables / styles
* Add categories → Extend transaction object
* Add charts → Integrate Chart.js

---

## 🧠 Learning Outcomes

* DOM Manipulation
* Array methods (`map`, `filter`, `reduce`)
* Event Handling
* Local Storage usage
* Building real-world UI

---

## ⚠️ Known Issues

* Currency is set to USD (can be changed to INR)
* No edit option for transactions

---

## 📌 Future Improvements

* ✏️ Edit transactions
* 📊 Add charts & analytics
* 🔐 User authentication
* ☁️ Cloud database integration

---

## 🙌 Author

**Pawandeep Kumar**

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!

---
