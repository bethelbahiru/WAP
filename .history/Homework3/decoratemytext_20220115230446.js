function pageLoad() {
    document.getElementById('decorate').onclick = hello;
    document.getElementById('bling').onchange = change;
  }

function hello() {
    setInterval(big, 500)
}

function big() {
    let text = document.getElementById('text');
    let currentSize = Number.parseInt(window.getComputedStyle(text, null).getPropertyValue('font-size'));
    document.getElementById('text').style.fontSize = currentSize + 2 + "pt";
}

function change() {
    if(document.getElementById('bling').checked) {
        document.getElementById('text').style.fontWeight = "bold";
        document.getElementById('text').style.color = "green";
        document.getElementById('text').style.textDecoration = "underline"
        document.getElementById('body').style.
    } else {
        document.getElementById('text').style.fontWeight = "normal";
        document.getElementById('text').style.color = "black";
        document.getElementById('text').style.textDecoration = "none"

    }
}

window.onload = pageLoad;
