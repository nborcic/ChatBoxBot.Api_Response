

// Path: script.js
// Elements and local storage initialization
let inputElement = document.querySelector('#input');
let chatDiv = document.getElementById('chatDiv');
let messageListS1 = JSON.parse(localStorage.getItem('MessagesS1')) || [];

// sending and receiving messages
document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        sendMessage();
    } else if (event.key === ' ') {
        receiveMessage();
    }
});
//setting up the event listeners for corresponding buttons
document.getElementById('s1').addEventListener('click', displayChatHistoryS1);
document.getElementById('s2').addEventListener('click', function () {
    console.log('s2 button clicked');
});

// Initialize chat history on Page load for S1
displayChatHistoryS1();

// Create and store a message for S1
function createMessageS1(message, type) {
    // Create and store a message
    messageListS1.push({ message, type });
    localStorage.setItem('MessagesS1', JSON.stringify(messageListS1));
}

// Send a message and display it for S1
function sendMessage() {

    let messageText = inputElement.value.trim();
    if (messageText) {
        displayMessage(messageText, 'sent');
        createMessageS1(messageText, 'sent');
        inputElement.value = '';
        chatDiv.scrollTop = chatDiv.scrollHeight;
    }
}
//api call to receive messages, simulate receiving messages
async function receiveMessage() {

    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    let receivedText = `${data.content} - ${data.author}`;
    displayMessage(receivedText, 'received');
    createMessageS1(receivedText, 'received');
    chatDiv.scrollTop = chatDiv.scrollHeight;
}

//displaying chat history for S1
function displayChatHistoryS1() {

    chatDiv.innerHTML = '';
    //for testing purposes, clearing chat history
    //localStorage.removeItem('MessagesS1');

    // checking if there is any chat history
    if (messageListS1.length === 0) {
        chatDiv.innerHTML = '<div style="text-align: center;">No chat history</div>';
    } else {
        messageListS1.forEach(({ message, type }) => displayMessage(message, type));
    }
}


function displayMessage(message, type) {
    setTheme();
    // Helper function to display a message
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    messageElement.classList.add('message', type);
    chatDiv.appendChild(messageElement);

}




//messages have shape for sent and received
//switch contact chats based on the button clicked
// button work for search. icons, add file, record voice1



function setTheme() {
    const time = new Date();
    //if its night time, set dark theme
    if (time.getHours() >= 20 || time.getHours() < 8) {
        document.body.style.backgroundColor = 'grey';
        document.querySelector('.sideBarContact').style.backgroundColor = '#ccc';
        document.querySelector('.contactsNav').style.color = 'white';
        document.querySelector('.chatDiv').style.backgroundColor = '#ccc';
        document.querySelector('.chatInput').style.backgroundColor = '#ccc';
        document.querySelector('.contactsSideBar').style.backgroundColor = '#ccc';
        document.querySelector('.contactsSideBar').children[2].style.backgroundColor = '#ccc';
        document.querySelector('.contactsSideBar').children[3].style.backgroundColor = '#ccc';
        document.querySelector('.contactsNav').style.backgroundColor = '#ccc';
    }
    console.log(time);
}

