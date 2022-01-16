function pageLoad() {
    document.getElementById("decorate").onclick = he;
  }

function hello() {
    let fontSize = Number.parseInt(document.getElementById("text").style.fontSize);
    console.log(document.getElementById("text").style.fontSize);
    document.getElementById("text").style.fontSize = fontSize + 24 + "pt";
}
