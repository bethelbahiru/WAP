function makeFunc() {
    var name = "Mozilla"; //local to makeFunc
    function displayName() {
    console.log(name);
    }
    return displayName;
   }
   var myFunc = makeFunc();
   myFunc(); 

console.log(">.....................>");

var x = 9;
function myFunction() {
    console.log(x);
    function inner() {
        console.log(x);
    }
    inner
}


