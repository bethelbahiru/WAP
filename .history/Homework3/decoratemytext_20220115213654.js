function hello() {
    let fontSize = Number.parseInt(document.getElementById("text").style.fontSize);
    console.log(fontSize);
    document.getElementById("text").style.fontSize = fontSize + 24 + "pt";
}