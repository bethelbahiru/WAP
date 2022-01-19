function makeFunc() {
    var name = "Mozilla"; //local to makeFunc
    function displayName() {
    console(name);
    }
    return displayName;
   }
   var myFunc = makeFunc();
   myFunc(); 