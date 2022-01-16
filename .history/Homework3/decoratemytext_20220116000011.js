function pageLoad() {
    document.getElementById('decorate').onclick = hello;
    document.getElementById('bling').onchange = change;
    document.getElementById('igpay').onclick = igpay;
    document.getElementById('malkovich').onclick = malkovich;
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
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let value = "" + document.getElementById('text').value;
    console.log(value);
    if (vowels.indexOf(value[0]) > -1) {
        document.getElementById('text').value = value + "-ay";
        document.getElementById('text').style.color = "red";
    } else {
        let firstMatch = value.match(/[aeiou]/g) || 0;
        let vowel = value.indexOf(firstMatch[0]);
        document.getElementById('text').value = value.substring(vowel) + value.substring(0, vowel) + "-ay";
        document.getElementById('text').style.color = "red";
    }
    
}

function 

window.onload = pageLoad;
