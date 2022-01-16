function pageLoad() {
    document.getElementById('decorate').onclick = hello;
    document.getElementById('bling').onchange = change;
  }

function hello() {
    document.getElementById('text').style.fontSize = 24 + "pt";
}

function change() {
    if(document.getElementById('bling').checked) {
        alert(yes)
    }
}

window.onload = pageLoad;
