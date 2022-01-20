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

function f() {
    var a = 1, b = 20, c;
    print(a + " " + b + " " + c); // 1 20 undefined
    // declares g (but doesn't call immediately!)
    function g() {
    var b = 300, c = 4000;
    print(a + " " + b + " " + c); // 1 300 4000
    a = a + b + c;
    print(a + " " + b + " " + c); // 4301 300 4000
    }
    console.log(a + " " + b + " " + c); // 1 20 undefined
    g();
    console.log(a + " " + b + " " + c); // 4301 20 undefined
   } 
f();
console.log(x);