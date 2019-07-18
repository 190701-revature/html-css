/* We need to understand events in browser */
let currentValue = localStorage.getItem('clicks') || 0;

const clickCounter = document.getElementById('click-counter');
const clickBox = document.getElementById('click-box');
const p = document.getElementById('p');

// Not a great solution
// clickBox.onclick = () => {
//     handleClick();
// };

// two styles of event propagation
// 1. capturing
// 2. bubbling

// default: bubbling
// capturing: happens first

// Adding an event listener
clickBox.addEventListener('click', (event) => {
    handleClick();
    event.stopPropagation();
}, true);

p.addEventListener('click', (event) => {
    console.log('p clicked!');
    event.stopPropagation();
}, true);

console.log(clickBox);

function handleClick() {
    currentValue++;
    clickCounter.innerText = currentValue;
    localStorage.setItem('clicks', currentValue);
}