function anime() {
    console.log(ANIMATIONS[document.getElementById('animation').value]);
    document.getElementById('textareas').value = ANIMATIONS[document.getElementById('animation').value];
}