# 🌤️ Weather App

A modern and responsive **Weather Application** built using **HTML, CSS, and JavaScript**. This project fetches real-time weather data from the OpenWeatherMap API and displays temperature, humidity, wind speed, and weather conditions for any city worldwide.

---

## 🚀 Features

* ✅ Search weather by city name
* ✅ Real-time weather data
* ✅ Temperature display in Celsius
* ✅ Humidity information
* ✅ Wind speed information
* ✅ Dynamic weather icons
* ✅ Error handling for invalid cities
* ✅ Responsive and modern UI

---

## 🛠️ Tech Stack

* **HTML5**
* **CSS3**
* **JavaScript (Vanilla JS)**
* **OpenWeatherMap API**
* **Fetch API**

---

## 📁 Folder Structure

```text
📦 weather-app
 ┣ 📜 index.html
 ┣ 📜 style.css
 ┣ 📜 app.js
 ┣ 📷 clear.png
 ┣ 📷 clouds.png
 ┣ 📷 rain.png
 ┣ 📷 drizzle.png
 ┣ 📷 mist.png
 ┣ 📷 humidity.png
 ┣ 📷 wind.png
 ┣ 📷 img-1.png
 ┗ 📜 README.md
```

---

## ⚙️ How It Works

### 🔹 1. User Searches a City

The user enters a city name and clicks the search button.

```js
checkWether(searchBox.value);
```

* Sends city name to the weather API
* Fetches current weather information

---

### 🔹 2. Fetch Weather Data

The application requests weather information from OpenWeatherMap.

```js
const response = await fetch(
  apiUrl + city + `&appid=${apiKey}`
);
```

* Uses Fetch API
* Retrieves live weather data

---

### 🔹 3. Display Weather Information

Weather details are dynamically updated.

```js
document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML =
Math.round(data.main.temp) + "°C";
```

Displays:

* City Name
* Temperature
* Humidity
* Wind Speed

---

### 🔹 4. Dynamic Weather Icons

Weather icons change automatically according to conditions.

```js
if(data.weather[0].main === "Clear"){
   weatherIcon.src = "/clear.png";
}
```

Supported Weather Types:

* ☀️ Clear
* ☁️ Clouds
* 🌧️ Rain
* 🌦️ Drizzle
* 🌫️ Mist

---

### 🔹 5. Error Handling

Invalid city names are handled gracefully.

```js
if(response.status == 404){
   document.querySelector(".error").style.display = "block";
}
```

* Shows error message
* Prevents broken UI

---

## 🎨 UI Highlights

* Clean card-based design
* Beautiful gradient backgrounds
* Weather illustrations
* Responsive layout
* User-friendly search interface
* Modern typography

---

## 🌎 API Used

### OpenWeatherMap API

Provides:

* Current weather data
* Temperature
* Humidity
* Wind speed
* Weather conditions

Example API Request:

```text
https://api.openweathermap.org/data/2.5/weather?units=metric&q=Delhi&appid=YOUR_API_KEY
```

---

## 📊 Displayed Weather Information

| Information | Example |
| ----------- | ------- |
| City        | Delhi   |
| Temperature | 32°C    |
| Humidity    | 65%     |
| Wind Speed  | 12 km/h |
| Condition   | Clear   |

---


## 💡 Advanced Upgrade Ideas

* 🔥 React Weather App
* 🔥 Weather Dashboard
* 🔥 Multiple City Tracking
* 🔥 Dark / Light Mode
* 🔥 Weather Maps Integration
* 🔥 Weather Alerts System
* 🔥 Progressive Web App (PWA)

---

## 📚 Learning Concepts

This project helps you learn:

* API Integration
* Async/Await
* Fetch API
* JSON Handling
* DOM Manipulation
* Conditional Rendering
* Error Handling
* Responsive Design

---

## 🎯 Project Workflow

1. User enters a city name
2. Search request is sent
3. API returns weather data
4. Weather details are displayed
5. Weather icon changes dynamically
6. Invalid searches show an error message

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
