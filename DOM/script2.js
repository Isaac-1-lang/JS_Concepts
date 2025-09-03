// Event listeners in Javascript
let head_5  = document.querySelector('.heading5');
function alert_Message() {
    alert("Hello World");
}
function color() {
    head_5.style.color = 'blue';
}
head_5.addEventListener('click',alert_Message);
head_5.addEventListener('mouseover', color)
