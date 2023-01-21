function converterUSD() {

    let usd = document.getElementById("usd").value;
    let inr = document.getElementById("inr");
    inr.value = inr.innerHTML = (usd * 80.98.toFixed(2));

}

function converterINR() {

    let inr = document.getElementById("inr").value;
    let usd = document.getElementById("usd");
    usd.value = usd.innerHTML = (inr / 80.98);
}

function theme(){
   let btn = document.getElementById("mode");
   document.body.classList.toggle("dark");
}