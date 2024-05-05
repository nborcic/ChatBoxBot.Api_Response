//Path: script.js
//leftDisp- 
//rightDisp
let inputElement = document.querySelector('#input');

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        sendMessage();

    }
})
document.addEventListener('keydown', function (event) {
    if (event.key === 'Space') {
        receiveMessage();
    }
})
function sendMessage() {
    const inputElement = document.querySelector('#input');
    let message = inputElement.value;
    const bubble = document.createElement('div');
    bubble.classList.add('message', 'sent');
    const rightDiv = document.getElementById('rightDisp');
    bubble.textContent = message;

    rightDiv.appendChild(bubble);
    input.value = '';


}
const url = 'https://api.quotable.io/random';
async function receiveMessage() {
    const receivedMessages = document.querySelector('.message,  .received');

    const response = await fetch(url);
    const data = await response.json();
    const message = data.content;
    const receivedP = document.createElement('p');
    receivedP.textContent = message;
    receivedMessages.appendChild(receivedP);
    const leftDiv = document.getElementById('leftDisp');
    leftDiv.appendChild(receivedMessages);
    console.log(data);
}

function displayMessages() {
    const display = document.getElementById('messageDisplay');
    display.innerHTML = ''; // Clear display

    for (let msg of messages) {

        if (msg.content.trim() !== "") {
            const messageDiv = document.createElement('div');
            messageDiv.className = 'message ' + msg.type;
            const messageText = document.createElement('p');
            messageText.textContent = msg.content;
            messageDiv.appendChild(messageText);
            display.appendChild(messageDiv);
        }
    }
    display.scrollTop = display.scrollHeight;
}





