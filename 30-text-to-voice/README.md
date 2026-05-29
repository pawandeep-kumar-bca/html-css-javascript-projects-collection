# 🎙️ Text To Speech Converter

A simple and interactive **Text To Speech Converter** built using **HTML, CSS, and JavaScript**. This project uses the browser's **Web Speech API** to convert written text into spoken audio with multiple voice options.

---

## 🚀 Features

* ✅ Convert text into speech
* ✅ Multiple voice selection
* ✅ Real-time speech synthesis
* ✅ Clean and modern UI
* ✅ Responsive design
* ✅ Prevents overlapping speech playback
* ✅ Supports browser available voices

---

## 🛠️ Tech Stack

* **HTML5**
* **CSS3**
* **JavaScript (Vanilla JS)**
* **Web Speech API**

---

## 📁 Folder Structure

```text
📦 text-to-speech-converter
 ┣ 📜 index.html
 ┣ 📜 style.css
 ┣ 📜 app.js
 ┣ 📷 drop.png
 ┗ 📜 README.md
```

---

## ⚙️ How It Works

### 🔹 1. Load Available Voices

The application fetches all voices available in the browser:

```js
voices = speechSynthesis.getVoices();
```

* Automatically loads supported voices
* Populates the dropdown menu dynamically

---

### 🔹 2. Voice Selection

Users can choose their preferred voice:

```js
speech.voice = selectedVoice;
```

* Supports male and female voices
* Depends on browser and operating system

---

### 🔹 3. Convert Text to Speech

When the user clicks the Listen button:

```js
speechSynthesis.speak(speech);
```

* Reads the entered text aloud
* Uses the selected voice

---

### 🔹 4. Prevent Speech Overlap

Before speaking, existing speech is canceled:

```js
speechSynthesis.cancel();
```

* Prevents multiple speeches from playing together

---

## 🎨 UI Highlights

* Beautiful gradient background
* Modern card-style layout
* Large text input area
* Voice selection dropdown
* Rounded action button with icon
* Fully responsive design

---

## ⚠️ Improvements (Recommended)

👉 Add these features to make the project more advanced:

* 🔲 Pause speech functionality
* 🔲 Resume speech functionality
* 🔲 Speech speed control
* 🔲 Pitch adjustment
* 🔲 Volume control
* 🔲 Character counter
* 🔲 Download speech as audio file

---

## 💡 Advanced Upgrade Ideas

* 🔥 Convert to React Application
* 🔥 Multi-language translator + speech
* 🔥 Dark/Light mode toggle
* 🔥 Save text history in LocalStorage
* 🔥 AI-powered text reader
* 🔥 Export generated speech as MP3

---

## 📚 Learning Concepts

This project helps you learn:

* DOM Manipulation
* Event Handling
* JavaScript Functions
* Array Iteration
* Web Speech API
* Dynamic Dropdown Creation
* Responsive Web Design

---

## 🙌 Author

**Pawandeep Kumar**

---

## ⭐ Support

If you like this project:

* Star ⭐ the repository
* Add it to your portfolio
* Share it with friends

---

## 📌 License

Free to use and modify for learning and personal projects.
