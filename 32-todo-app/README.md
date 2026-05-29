# 📝 To-Do List Web App

A simple and interactive **To-Do List Application** built using **HTML, CSS, and JavaScript**. This project helps users manage daily tasks by allowing them to add, complete, delete, and save tasks using Local Storage.

---

## 🚀 Features

* ✅ Add new tasks
* ✅ Mark tasks as completed
* ✅ Delete tasks
* ✅ Save tasks in Local Storage
* ✅ Automatically load saved tasks
* ✅ Responsive and clean UI
* ✅ Beginner-friendly project

---

## 🛠️ Tech Stack

* **HTML5**
* **CSS3**
* **JavaScript (Vanilla JS)**
* **Local Storage API**

---

## 📁 Folder Structure

```text
📦 todo-list-app
 ┣ 📜 index.html
 ┣ 📜 style.css
 ┣ 📜 app.js
 ┣ 📷 check.png
 ┣ 📷 un.png
 ┗ 📜 README.md
```

---

## ⚙️ How It Works

### 🔹 1. Add New Task

Users can add a new task using the input field:

```js
let li = document.createElement("li");
li.innerHTML = input.value;
list.appendChild(li);
```

* Creates a new task item
* Adds it to the task list

---

### 🔹 2. Complete Task

Clicking on a task marks it as completed:

```js
e.target.classList.toggle("checked");
```

* Adds line-through effect
* Updates task status visually

---

### 🔹 3. Delete Task

Each task contains a delete button:

```js
e.target.parentElement.remove();
```

* Removes task instantly
* Updates Local Storage

---

### 🔹 4. Save Tasks

Tasks are stored in browser Local Storage:

```js
localStorage.setItem("data", list.innerHTML);
```

* Keeps tasks even after page refresh
* Provides persistent storage

---

### 🔹 5. Load Saved Tasks

Stored tasks are loaded automatically:

```js
list.innerHTML = localStorage.getItem("data");
```

* Restores previous task list
* Improves user experience

---

## 🎨 UI Highlights

* Beautiful gradient background
* Modern card layout
* Rounded input field and buttons
* Custom check/uncheck icons
* Clean task management interface
* Mobile-friendly design

---

## 💾 Local Storage Integration

This project uses the browser's Local Storage API to save tasks permanently.

Benefits:

* No database required
* Fast performance
* Works offline
* Data remains after browser refresh

---


## 💡 Advanced Upgrade Ideas

* 🔥 React To-Do Application
* 🔥 Drag & Drop Task Sorting
* 🔥 Firebase Database Integration
* 🔥 User Authentication
* 🔥 Cloud Task Synchronization
* 🔥 Progress Tracking Dashboard
* 🔥 Team Collaboration Features

---

## 📚 Learning Concepts

This project helps you learn:

* DOM Manipulation
* Event Delegation
* Event Handling
* Dynamic Element Creation
* Local Storage API
* CSS Styling
* Responsive Design
* CRUD Operations Basics

---

## 🎯 Project Workflow

1. User enters a task
2. Clicks the Add button
3. Task appears in the list
4. User can mark it completed
5. User can delete it
6. Data is automatically saved
7. Tasks remain after page reload

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
