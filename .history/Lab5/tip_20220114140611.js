function calcTip() {
    var subTotal = document.getElementById("subtotal");
    var percent = document.getElementById("tip");
    var tip = (percent / 100) * Number.parseFloat();
    console.log(tip);
    document.getElementById("total").innerHTML = tip;
}