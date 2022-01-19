function 


(function rudyTimer() {
    setInterval(write, 1000);
})();

function write() {
    document.getElementById('rudy').innerHTML += " Rudy"
}

window.onload = pageLoad