function pageLoad() {
    document.getElementById('decorate').onclick = hello;
    document.getElementById('bling').onchange = change;
    document.getElementById('igpay').onchange = igpay;
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
        document.body.style.backgroundImage = "url('/Homework1/images/dollar.png')";
    } else {
        document.getElementById('text').style.fontWeight = "normal";
        document.getElementById('text').style.color = "black";
        document.getElementById('text').style.textDecoration = "none"
        document.body.style.backgroundImage = "none";
    }
}

function igpay() {
    let vowels = ['a', 'e', 'i', ]
    let value = "" + document.getElementById('text').value;
    if () {}
    
}

window.onload = pageLoad;
