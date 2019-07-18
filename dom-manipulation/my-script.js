/* Document Object Model */

const myElement = document.getElementById('primary-heading');
console.log(myElement);

setTimeout(() => {
    // innerHTML usage can lead to weaknesses related to XSS
    myElement.innerText = 'Now the heading is this!';
}, 1000);

const mainContent = document.getElementById('main-content');

const newElement = document.createElement('p');
console.log(newElement);
newElement.innerText = 'This is a new p tag!';
mainContent.appendChild(newElement);

setTimeout(() => {
    mainContent.removeChild(newElement);
}, 2000);

// document.querySelector('header > h1')

const myClasses = document.getElementsByClassName('my-class');
console.log(myClasses);

/*
 * Don't interact with style properties directly with JS,
    instead just interact with their classes.
 */
for(let i = 0; i < myClasses.length; i++) {
    const currentElement = myClasses[i];
    currentElement.classList.toggle('no-border');
}

