function calcTip() {
    var subTotal = document.getElementById("subtotal");
    var percent = document.getElementById("tip");
    var tip = (percent / 100) * NumsubTotal;
    console.log(tip);
    document.getElementById("total").innerHTML = tip;
}