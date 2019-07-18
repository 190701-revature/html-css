const submitButton = 
    document.getElementById('poke-submit');

submitButton.addEventListener('click', (e) => {
    const input = getInputData();    
    
    // confirm that there is a value
    if (!input) {
        e.stopPropagation();
        return;
    }

    // construct a url from that field value
    const url = 
        `https://pokeapi.co/api/v2/pokemon/${input}`;

    // send an http request
    sendFetch(url);
});

function getInputData() {
        // get the value of the input field
        const inputElement = 
        document.getElementById('poke-input');
    
    const inputValue = inputElement.value;
    return inputValue.trim();
}

function sendXHR(url) {
    // XmlHttpRequest

    /* XHR Ready States 
    0 - Unopened
    1 - Opened, but not sent
    2 - Sent, Headers received
    3 - Downloading
    4 - Complete
    */

    // create an XHR object
    const xhr = new XMLHttpRequest();

    // Register my event handlers
    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === 4) {
            const payload = JSON.parse(xhr.response);
            updateView(payload.sprites.front_default,
                payload.name);
        }
    });

    // Open the request
    xhr.open('get', url);

    // Send request
    xhr.send();
}

async function sendFetch(url) {
    const response = await fetch(url);
    const payload = await response.json();
    updateView(payload.sprites.front_default,
        payload.name);
}


function updateView(spriteUrl, name) {
    const imageE = document.getElementById('poke-img');
    const nameE = document.getElementById('poke-name');

    imageE.src = spriteUrl;
    nameE.innerText = name;
}