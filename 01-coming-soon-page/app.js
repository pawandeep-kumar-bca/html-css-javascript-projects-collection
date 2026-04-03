let countDownDate = new Date("oct 16,2025 00:00:00").getTime();
let x = setInterval(() => {
    let now = new Date().getTime();
    let distance = countDownDate - now;
    let days = Math.floor(distance/(1000*60*60*24));
    let hours = Math.floor((distance %(1000*60*60*24))/(1000*60*60));
    let minutes = Math.floor((distance % (1000*60*60))/(1000*60));
    let seconds = Math.floor((distance%(1000*60))/1000);
    

    document.getElementById("Days").innerHTML = days;
    document.getElementById("Hours").innerHTML = hours;
    document.getElementById("Minutes").innerHTML = minutes;
    document.getElementById("Seconds").innerHTML = seconds;
   if(distance<0){
    clearInterval(x)
    document.getElementById("Days").innerHTML = "00";
    document.getElementById("Hours").innerHTML = "00";
    document.getElementById("Minutes").innerHTML = "00";
    document.getElementById("Seconds").innerHTML ="00" ;
   }

}, 1000);