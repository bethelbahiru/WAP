function pageLoad() {
    document.getElementById('decorate').onclick = hello;
    document.getElementById('bling').onchange = change;
  }

function hello() {
     = 24 + "pt";
}

function change() {
    if(document.getElementById('bling').checked) {
        alert("yes");document.getElementById('text').style.fontSize
    }
}

window.onload = pageLoad;
