let date = document.getElementById("date");
let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");

const today = new Date();
let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday",];
let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

date.innerHTML = (today.getDate()<10? "0":"")+ today.getDate();
day.innerHTML = days[today.getDay()];
month.innerHTML = months[today.getMonth()];
year.innerHTML = today.getFullYear();


