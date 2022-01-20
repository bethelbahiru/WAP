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

var adder = (function () {
    var number = 0; // private variable
    return {
        function (num) {
            return number += num;
        }
    }
})();

add5 = adder;
console.log(add5(5)); 
console.log(add5(5));
console.log(add5(5));
