let imgBox = document.querySelector(".imgBox");
let imgWrap = document.querySelector(".imgWrap");
let original = document.getElementById("original-img");
let span = document.getElementById("span");

original.style.width = imgBox.offsetWidth + 'px';



let leftSpace = imgBox.offsetLeft;
imgBox.onmousemove = function(e){
    console.log(e)
    let boWidth =( e.pageX - leftSpace) +"px";
    imgWrap.style.width = boWidth;
    span.style.left = boWidth;
}
