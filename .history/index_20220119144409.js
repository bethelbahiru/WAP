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
    inner();
}

myFunction();

var foo = 1;
function bar() {
    console.log(foo);
    if (!foo) {
        var foo = 10;
    }
console.log(foo);
}
bar();


var foo = 1;



function bar() {
    var foo;
    console.log(foo);
    if (!foo) {
        foo = 10;
    }
console.log(foo);
    }
bar();
