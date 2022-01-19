function anime() {
    console.log(ANIMATIONS[document.getElementById('animation').value]);
    document.getElementById('text').value = ANIMATIONS[document.getElementById('animation').value];
}


function sizes() {
    document.getElementById('text').style.fontSize = document.getElementById('size').value + "pt";
}


function startButton() {
    console.log("starting");
    document.getElementById('stopButton').disabled = false;
    document.getElementById('startButton').disabled = true;
    document.getElementById('animation').disabled = true;

    let texts = ANIMATIONS[].split("=====\n");
    let idx = 0;

    var displayFunction = function() {
        textArea.value = texts[idx];
        idx = (idx + 1) % texts.length;
        setTimeOutID = setTimeout(displayFunction, animationSpeed);
    };
    setTimeOutID = setTimeout(displayFunction, animationSpeed);
};