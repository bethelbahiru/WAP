function hello() {
    let fontSize = Number.parseInt(document.getElementById("text").style.fontSize);
    console.log(document.getElementById("text"));
    document.getElementById("text").style.fontSize = fontSize + 24 + "pt";
}