function calcTip() {
    var subTotal = document.getElementById("subtotal").value;
    var percent = document.getElementById("tip").value;
    var tip = (Number.parseInt(percent) / 100) * Number.parseFloat(subTotal);
    console.log(Number.parseFloa(tip));
    document.getElementById("total").innerHTML = tip;
}