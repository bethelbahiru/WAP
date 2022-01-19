function makeFunc() {
    var name = "Mozilla"; //local to makeFunc
    function displayName() {
    alert(name);
    }
    return displayName;
   }
   var myFunc = makeFunc();
   myFunc(); 