function calcTip() {
    var subTotal = document.getElementById("subtotal");
    var percent = document.getElementById("tip");
    var tip = (Number.parseFloat(per) / 100) * Number.parseFloat(subTotal);
    console.log(tip);
    document.getElementById("total").innerHTML = tip;
}