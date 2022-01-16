function pageLoad() {
    document.getElementById('decorate').onclick = hello;
    document.getElementById('bling').onchange = change;
  }

function hello() {
    document.getElementById('text').style.fontSize = 24 + "pt";
}

function change() {
    if(document.getElementById('bling').checked) {
        document.getElementById('text').style.fontWeight = "bold";
        document.getElementById('text').style.color = "green";
        document.getElementById('text').style.textDecoration = "underline"
    } else {
        document.getElementById('text').style.fontWeight = "normal";
    }
}

window.onload = pageLoad;
