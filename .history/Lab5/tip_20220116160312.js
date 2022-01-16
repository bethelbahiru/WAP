function calcTip() {
    var subTotal = document.getElementById("subtotal").value;
    var percent = document.getElementById("tip").value;
    var tip = (Number.parseInt(percent) / 100) * Number.parseFloat(subTotal);
    console.log(Number.parseFloat(tip).toFixed(2));
    document.getElementById("total").innerHTML = Number.parseFloat(tip).toFixed(2);
}


var myfunc = function(a, x) {
    return a * x;
   };
   var x = myfunc(2, 3);
   var y = myfunc;
   console.log(x);
   alert(y(2,3)); 