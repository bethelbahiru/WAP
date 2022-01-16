function pageLoad() {
    document.getElementById('decorate').onclick = hello;
    document.getElementById('bling').onchange = hello;
  }

function hello() {
    document.getElementById('text').style.fontSize = 24 + "pt";
}

window.onload = pageLoad;
