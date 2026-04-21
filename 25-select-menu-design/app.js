let selectFiled = document.getElementById("selectFiled");
let selectText = document.getElementById("selectText");
let list = document.getElementById("list");
let arrow = document.getElementById("arrow");
let options = document.getElementsByClassName("options");

selectFiled.onclick = function(){
    list.classList.toggle("hide");
    arrow.classList.toggle("rotate")
}
for(let option of options){
    option.onclick = function(){
        selectText.innerHTML = this.textContent;
         list.classList.toggle("hide");
          arrow.classList.toggle("rotate")
    }
}
