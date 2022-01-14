function calcTip() {
    var subTotal = document.getElementById("subtotal").te;
    var percent = document.getElementById("tip");
    console.log(subTotal);
    console.log(percent);
    var tip = (Number.parseInt(percent) / 100) * Number.parseFloat(subTotal);
    console.log(Number.parseInt(tip));
    document.getElementById("total").innerHTML = tip;
}