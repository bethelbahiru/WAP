function calcTip() {
    var subTotal = document.getElementById("subtotal");
    var percent = Document.getElementById("tip");
    var tip = (percent / 100) * subTotal;
    Document.getElementById("total").innerHTML = tip;
}