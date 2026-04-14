let password = document.getElementById("password");
let eyeIcon = document.getElementById("hide");

eyeIcon.onclick = function(){
    if(password.type == "password"){
        password.type = "text";
        eyeIcon.src = "/show.png";
    }else{
         password.type = "password";
         eyeIcon.src = "/hide.png";
    }
}