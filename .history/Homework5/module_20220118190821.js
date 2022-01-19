(function rudyTimer() {
    timer = null;
    if (timer === null) {
        timer = setInterval(rudy, 1000);
    } else {
        clearInterval(timer);
        timer = null;
    }


    setInterval(write, 1000);
})();

function write() {
    document.getElementById('rudy').innerHTML += " Rudy";
}

