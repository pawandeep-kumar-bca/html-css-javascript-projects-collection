
const quote = document.getElementById("quote");
const author = document.getElementById("author");
let url = "https://quotes-api-self.vercel.app/quote"

async function getQuote() {
  
    const response = await fetch(url);
    
    const result = await response.json();
    
    quote.innerHTML = result.quote;
    author.innerHTML =result.author;
  
}

getQuote();


function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML +"----by" + author.innerHTML,"tweet window","width=600","height=300")
}
