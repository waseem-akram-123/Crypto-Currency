// let amt1 = document.querySelector ("#amt1");
// let amt2 = document.querySelector ("#amt2");
// let amt3 = document.querySelector ("#amt3");

var settings = {
    "async": true,
    "scrossDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
    "method":"GET",
    "headers":{}
}
$.ajax(settings).done(function (response){
    console.log (response);

let amt1 = document.querySelector ("#amt1");
let amt2 = document.querySelector ("#amt2");
let amt3 = document.querySelector ("#amt3");

    amt1.innerHTML = "$ "+ response.bitcoin.usd;
    amt2.innerHTML = "$ "+ response.ethereum.usd;
    amt3.innerHTML = "$ "+ response.dogecoin.usd;
    
});

