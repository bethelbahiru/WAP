(function () {
    return function () {
        timer = null;
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

