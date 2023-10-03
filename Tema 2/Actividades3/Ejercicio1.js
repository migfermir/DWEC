function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.addEventListener('DOMContentLoaded', function() {document.body.style.backgroundColor = getRandomColor();});

/*
let r1 = Math.random() * 256;
let r2 = Math.random() * 256;
let r3 = Math.random() * 256;

document.addEventListener("DOMContentLoaded", () => {document.body.style.backgroundcolor = "rgb(" + r1 + "," + r2 + "," + r3 + ")"});
*/
