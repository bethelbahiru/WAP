function pageLoad() {
    document.getElementById('decorate').onclick = hello;
    document.getElementById('bling').onclick = hello;
  }

function hello() {
    document.getElementById('text').style.fontSize = 24 + "pt";
}

window.onload = pageLoad;
