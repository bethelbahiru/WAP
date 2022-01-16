function pageLoad() {
    document.getElementById('decorate').onclick = hello;
    document.getElementById('bling').onchange = change;
  }

let time = setInterval(hello, 500);

function hello() {
    
}

function change() {
    if(document.getElementById('bling').checked) {
        document.getElementById('text').style.fontWeight = "bold";
        document.getElementById('text').style.color = "green";
        document.getElementById('text').style.textDecoration = "underline"
    } else {
        document.getElementById('text').style.fontWeight = "normal";
        document.getElementById('text').style.color = "black";
        document.getElementById('text').style.textDecoration = "none"

    }
}

window.onload = pageLoad;
