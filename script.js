//Path: script.js
//leftDisp- 
//rightDisp
const inputElement = document.querySelector('#input');
const displayElement = document.querySelector('#display');

function sendMessage() {
    const inputElement = document.querySelector('#input');
    let message = inputElement.value;
    const leftDiv = document.getElementById('leftDisp');
    const rightDiv = document.getElementById('rightDisp');
    const createP = document.createElement('p.1');
    createP.style.fontSize = '40px';
    const combinedMessage = createP.innerHTML = message;
    leftDiv.appendChild(createP);
    input.value = '';
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        sendMessage();
    }

})

//define the bubble for the message
//define the picture to append the p element to
const thereMessage = document.createElement('div.theremessage');
thereMessage.style.display = 'flex';

//created massage and bubble sent by the user
//and received by the user, respectively
//created the p element to append the message to
//bubble with respective styling for mine and theirs...going sleep now, its 1:59am

