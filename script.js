//Path: script.js
//leftDisp- 
//rightDisp

let inputElement = document.querySelector('#input');
let messages = [];

function saveMessages4S1() {
    // Function to save messages for S1
    const saveMessage = localStorage.setItem('Message', JSON.stringify(messageListS1));
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
})
document.addEventListener('keydown', function (event) {
    if (event.key === ' ') {
        receiveMessage();
    }
})

let messageListS1 = [
    { message: "this is my first", type: "sent" },
    { message: "this one i recieved", type: "received" }
] || [];
localStorage.setItem('MessagesS1', JSON.stringify(messageListS1));

function createMessageS1(message, type) {
    // Function to create a message for S1
    messageListS1.push({ message, type });
    localStorage.setItem('MessagesS1', JSON.stringify(messageListS1));
    return {};
}

document.getElementById('s1').addEventListener('click', function () {
    displayChatHistoryS1();
    console.log('s1');
})

document.getElementById('s2').addEventListener('click', function () {
    console.log('s2');
});

function sendMessage() {
    // Function to send a message
    if (inputElement.value.trim() !== '') {
        let message = inputElement.value;
        const bubble = document.createElement('div');
        bubble.classList.add('message', 'sent');
        const rightDiv = document.getElementById('chatDiv');
        bubble.textContent = message;
        rightDiv.appendChild(bubble);
        createMessageS1(message, 'sent');
        inputElement.value = '';
        console.log(messageListS1);
    }
}

function displayChatHistoryS1() {
    // Function to display chat history for S1
    const chatDiv = document.getElementById('chatDiv');
    chatDiv.innerHTML = ''; // Clear previous chat history

    // Get messages from local storage
    const getMess = localStorage.getItem('MessagesS1');
    const parsedMessages = getMess ? JSON.parse(getMess) : [];

    if (parsedMessages.length === 0) {
        const div = document.createElement('div');
        div.style.textAlign = 'center';
        div.textContent = 'No chat history';
        chatDiv.appendChild(div);
        return;
    }

    parsedMessages.forEach(message => {
        const div = document.createElement('div');
        div.textContent = `${message.message} - ${message.type}`;
        chatDiv.appendChild(div);
        div.classList.add('message', message.type);
    });
}

displayChatHistoryS1();


async function receiveMessage() {
    // Function to receive a message
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();

    const dataData = data.content + " - " + data.author;
    const pTag = document.createElement('p');
    pTag.textContent = dataData;
    const bubble = document.createElement('div');
    bubble.classList.add('message', 'received');
    bubble.appendChild(pTag);
    const leftDiv = document.getElementById('chatDiv');
    leftDiv.appendChild(bubble);
    createMessageS1(dataData, 'received');
    inputElement.value = ''; // Corrected line
}
