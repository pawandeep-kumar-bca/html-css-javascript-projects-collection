
let bitcoin = document.getElementById("bitcoin");
let ethereum = document.getElementById("ethereum");
let dogecoin= document.getElementById("dogecoin");

const url = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd";

async function getCryptoPrices() {
  
    const response = await fetch(url);
    const data = await response.json();
    bitcoin.innerHTML = data.bitcoin.usd;
    ethereum.innerHTML =  data.ethereum.usd;
    dogecoin.innerHTML = data.dogecoin.usd;
    
}

getCryptoPrices();
