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
    console.log('tying', x);
    if (true) {
        var x = 7
        console.log('trying', x);
    }
}

myFunction();



function bar() {
    var foo;
    console.log(foo);
    if (!foo) {
        foo = 10;
    }
console.log(foo);
    }
bar();

console.log("****************************");

var x = 10; 
function main() {
    console.log(x);
    x = 20;
    if (x > 0) {
        var x = 30;
        console.log(x);
    }
    var x = 40;
    var f = function(x) { console.log(x); }
    f(x);
}
console.log(x)
main();