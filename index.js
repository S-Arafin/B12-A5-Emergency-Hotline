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
let log = document.getElementById("callLog");


for(let clk of callBtn ){
    clk.addEventListener("click", function(e){
        e.preventDefault();
        
        let grandmother = clk.parentElement.parentElement;

        let serviceName = grandmother.querySelector("h2").textContent;
        let serviceNumber = grandmother.querySelector("h1").textContent;
       

        let coin = parseInt(coins.innerText);
        if(coin>=20){
            coin = coin-20;
        }
        
        coins.innerText = coin;
        if(coin<1){
            window.alert("You Don't have enough coins to make a call");
            return;
        }
         window.alert("Calling"+ " " +serviceName+ " " +serviceNumber);

        let now = new Date().toLocaleTimeString(); 
        let callHistory = document.createElement("div");
        callHistory.className = "flex items-center justify-between gap-4 p-3 bg-gray-100 mt-5 rounded-md";

        callHistory.innerHTML =
            '<div>' +
            '<h2 class="text-lg font-semibold">' + serviceName + '</h2>' +
            '<p>' + serviceNumber + '</p>' +
            '</div>' +
            '<div class="text-right">' +
            '<p>' + now + '</p>' +
            '</div>';
        log.appendChild(callHistory);



    })

}

let clrBtn = document.getElementById("clr")
clrBtn.addEventListener("click", function(e){
    e.preventDefault();
    log.innerHTML=""
})
let copyCount =parseInt (document.getElementById('copyCount').innerText)
let copies = document.getElementsByClassName("copyBtn")
for(let copy of copies)
copy.addEventListener("click", function(e){
    e.preventDefault();
    copyCount ++;
    document.getElementById("copyCount").innerText = copyCount

    let c = copy.parentElement.parentElement
    let Number = c.querySelector("h1").textContent;
    
    navigator.clipboard.writeText(Number).then(()=>{
        window.alert(Number +" "+ "copied")
    })

})