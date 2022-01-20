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

var foo = 1;
function bar() {
    console.log(!);
if (!foo) {
    var foo = 10;
}
console.log(foo);
}
bar();



