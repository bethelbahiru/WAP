function calcTip() {
    var subTotal = document.getElementById("subtotal");
    var percent = document.getElementById("tip");
    var tip = (percent / 100) * subTotal;
    console.log
    document.getElementById("total").innerHTML = tip;
}