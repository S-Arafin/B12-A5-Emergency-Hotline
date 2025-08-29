let heartCount =parseInt( document.getElementById('heartCount').innerText)
let hearts  = document.getElementsByClassName("hearts")
for(let heart of hearts){
    heart.addEventListener("click" , function(e){
        e.preventDefault();
        heartCount++
        document.getElementById('heartCount').innerText = heartCount
        heart.classList.add("text-red-500");
        
        
    })
}

let callBtn = document.getElementsByClassName("callBtn");
let coins = document.getElementById("coin");
let log = document.getElementById("callLog")

for(let clk of callBtn ){
    clk.addEventListener("click", function(e){
        e.preventDefault();
        
        let grandmother = clk.parentElement.parentElement;

        let serviceName = grandmother.querySelector("h2").textContent;
        let serviceNumber = grandmother.querySelector("h1").textContent;
       

        let coin = parseInt(coins.innerText);
        coin = coin-20
        coins.innerText = coin;
        if(coin<1){
            window.alert("You Don't have enough coins to make a call");
            return;
        }
         window.alert("Calling"+ " " +serviceName+ " " +serviceNumber);

        log.innerHTML = 
    })
}