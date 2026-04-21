
function nav(){
const links= document.getElementById("link");
const hamburger= document.getElementById("hamburger");
const span = document.querySelectorAll(".hamburger span")
let isActive = false;

hamburger.addEventListener("click",()=>{
    if(!isActive){
        links.style.display = "block";
        links.classList.remove("close");
        links.classList.add("open");
        span[0].style.transform = "rotate(45deg)";
        span[1].style.opacity  = "0";
        span[2].style.transform = "rotate(-45deg)";
         isActive =true;
        
    }else{
       
        links.classList.remove("open");
        links.classList.add("close");
        span[0].style.transform = "rotate(0deg)";
        span[1].style.opacity  = "1";
        span[2].style.transform = "rotate(0deg)";
        isActive = false;
        
    }

 })

    links.addEventListener("animationend", (e) => {
     if (e.animationName === "slideUp") {
    links.style.display = "none";
    }
});
}

function sectionOne(){


let dishes = [
    { id: "w", img: "images/rice.png", name: "Rice" },
    { id: "p", img: "images/platter.png", name: "Dishes" },
    { id: "a", img: "images/chicken.png", name: "Chicken" },
    { id: "s", img: "images/samosa.png", name: "Samosa" },
    { id: "n", img: "images/chocolate.png", name: "Chocolate" },
    { id: "d", img: "images/dosa.png", name: "Dosa" }
];

let rightOne = document.querySelector(".right-1");
let rightTwo = document.querySelector(".right-2");

// ✅ Show default image (first one)
rightOne.innerHTML = `<img src="${dishes[0].img}" alt="${dishes[0].name}">`;

// ✅ Render buttons
rightTwo.innerHTML = dishes.map(({ id, img, name }) => {
    return `
    <button class="btn-first" data-img="${img}">
        <img src="${img}" alt="${name}">
        ${name}
    </button>`;
}).join("");

// ✅ Change image on button click
function handleDishClick(e) {
  const btn = e.target.closest(".btn-first");
  if (!btn) return;

  const imgSrc = btn.dataset.img; // ✅ modern way

  rightOne.innerHTML = `<img src="${imgSrc}" alt="">`;
}

rightTwo.addEventListener("click", handleDishClick);
}

nav();
sectionOne();

let products = [
  {id:"a",name:"Samosa",img:"images/samosa.png",price:"25"},
  {id:"b",name:"Rice",img:"images/Rice.png",price:"40"},
  {id:"c",name:"platter",img:"images/platter.png",price:"150"},
  {id:"d",name:"dosa",img:"images/dosa.png",price:"80"},
  {id:"e",name:"chocolate",img:"images/chocolate.png",price:"120"},
  {id:"e",name:"Chicken",img:"./images/chicken.png",price:"200"},
]

let slider = document.querySelector(".slider");
let leftSlide = document.querySelector("#leftSlider");
let rightSlide = document.querySelector("#rightSlide");

slider.innerHTML = products.map(({id,name,img,price})=>{


         return `<div class="popular-Dishes">
                        <img src="${img}">
                        <h1>${name}</h1>
                        <div class="star">
                            <i class="ri-star-fill"></i>
                            <i class="ri-star-fill"></i>
                            <i class="ri-star-fill"></i>
                            <i class="ri-star-fill"></i>
                            <i class="ri-star-fill"></i>
                        </div>
                        <p>India’s favorite snack: crisp shell, spicy heart, served hot and unforgettable.</p>

                        <div class="price">
                            <h4>₹ ${price}</h4>
                            <button>Add to Cart</button>
                        </div>
                    </div>`
}).join("");


