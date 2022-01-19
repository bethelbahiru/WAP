function makeFunc() {
    var name = "Mozilla"; //local to makeFunc
    function displayName() {
    confirm(name);
    }
    return displayName;
   }
   var myFunc = makeFunc();
   myFunc(); 