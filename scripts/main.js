let i = 0;
let text = "Taylor Goldman";
let speed = 10;

if (i < text.length) {
    document.getElementsByClassName('head').innerHTML += text.charAt(i);
    i++;
    setTimeout(animatedName, speed);
}