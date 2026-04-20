# 🧠 Quiz App

A simple and interactive **Quiz Application** built using **HTML, CSS, and JavaScript**.
This app allows users to answer multiple-choice questions and view their final score.

---

## 🚀 Features

* ❓ Multiple-choice quiz questions
* ✅ Instant answer validation
* 🎯 Score tracking system
* 🎨 Visual feedback (Correct / Incorrect answers)
* 🔄 Restart quiz option
* ⚡ Dynamic question rendering using JavaScript

---

## 🛠️ Tech Stack

* HTML5
* CSS3
* JavaScript (Vanilla JS)

---

## 📂 Project Structure

```id="f9x2p1"
📁 quiz-app
 ├── index.html
 ├── style.css
 └── app.js
```

---

## ⚙️ How It Works

* Quiz starts automatically when page loads
* Each question is displayed one by one
* User selects an answer:

  * Correct answer → highlighted in green
  * Wrong answer → highlighted in red
* Next button appears after selection
* At the end → total score is shown

---

## 🧩 Core Logic

### 1. Start Quiz

```javascript id="p7a2k9"
function startQuiz(){
  currentQuestionIndex = 0;
  score = 0;
  showQuestion();
}
```

### 2. Show Questions Dynamically

```javascript id="h4l8m2"
currentQuestion.options.forEach((answer) => {
  const button = document.createElement("button");
  button.innerText = answer.text;
});
```

### 3. Answer Selection

```javascript id="z8q3x1"
if(isCorrect){
  selectBtn.classList.add("correct");
  score++;
}
```

---

## ▶️ How to Run

1. Download or clone the project
2. Open folder in VS Code
3. Run `index.html` in browser

---

## 💡 Learning Outcomes

* DOM Manipulation
* Event Handling
* Dynamic UI Rendering
* Array & Object Handling
* State Management (score, question index)

---

## 📌 Future Improvements

* Timer for each question ⏱️
* Add categories (HTML, CSS, JS, etc.)
* Store high scores (Local Storage)
* Add animations & sounds
* Backend integration for real quizzes

---

## 👨‍💻 Author

**Pawandeep Kumar**
Aspiring MERN Stack Developer 🚀

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub and share it!

---
