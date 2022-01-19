var rudyTimer = (function () {
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

    function setName() {
        this.privateAccName = 
    }

    return {
        createAccount: function () {
            this.privateAccName = document.getElementById('accName').value;
            
        };
    }
})();

