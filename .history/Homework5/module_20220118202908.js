;var rudyTimer = (function () {
    timer = null;
    return function () {
        if (timer === null) {
            timer = setInterval(write, 1000);
        } else {
            clearInterval(timer);
            timer = null;
        }
    }
})();

function write() {
    document.getElementById('rudy').innerHTML += " Rudy";
}


var account = (function() {
    var privateAccName = "";
    var privateAccNumber = 0;

    function setName(name) {
        privateAccName = name;
    }

    function setNumber(number) {
        privateAccNumber = number;
    }

    return {
        createAccount: function () {
            setName(document.getElementById('accName').value);
            setNumber(document.getElementById('accNum').value);
        },
        name: function getName() {
            return privateAccName;
        },
        acc: function getNumber() {
            return privateAccNumber;
        }

    }
})();


var accountInfoList = [];

function acc() {
    account.createAccount();
    accountInfoList.push({name: account.name(), number: account.acc()});
    
   // accountInfoList.forEach(x => document.getElementById('text').value = x.name + " " + x.number);
}

