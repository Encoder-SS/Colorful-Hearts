const heartColor = ['red', 'purple', 'blue', 'green', 'yellow', 'orange', '#ddd'];
const heart = document.querySelector('svg');
const btn = document.querySelector('button');
btn.addEventListener('click', changeColor);
function changeColor(){
    let random = Math.floor(Math.random()*heartColor.length)
    heart.style.fill = heartColor[random];
}
