function makeFunc() {
    var name = "Mozilla"; //local to makeFunc
    function displayName() {
    cons(name);
    }
    return displayName;
   }
   var myFunc = makeFunc();
   myFunc(); 