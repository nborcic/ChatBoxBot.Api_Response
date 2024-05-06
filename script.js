//Path: script.js
//leftDisp- 
//rightDisp

let chatHistory = localStorage.getItem('chatHistory') || [];
let inputElement = document.querySelector('#input');
let messages = [];
function saveMessages() {
    const saveMessage = localStorage.setItem('Message', chatHistory);
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
//create a list of objects to add messages to
let messageListS1 = [{ fastaadsad: sent }, { fasfasfa: received }];

function createMessage(message, type) {
    messageListS1.push({ message, type });
    message = messageListS1[messageListS1.length - 1].message;

    type = messageListS1[messageListS1.length - 1].type;

    return {
        message: message,
        id: id,
        type: type

    }
}
document.getElementById('s1').addEventListener('click', function () {
    console.log('s1');
    //displayChatHistory(); for this constact
});
document.getElementById('s2').addEventListener('click', function () {
    console.log('s2');
});
document.getElementById('s3').addEventListener('click', function () {
    console.log('s3');
});

function sendMessage() {
    if (inputElement.value.trim() !== '') {
        const inputElement = document.querySelector('#input');
        let message = inputElement.value;
        const bubble = document.createElement('div');
        bubble.classList.add('message', 'sent');
        const rightDiv = document.getElementById('chatDiv');
        bubble.textContent = message;
        rightDiv.appendChild(bubble);
        localStorage.setItem('Messages', message);
        createMessage(message, 'sent');
        input.value = '';
    }
}


function displayChatHistory() {
    const chatBox = document.getElementById('chatDiv');
    chatBox.innerHTML = '';
    chatHistory.forEach(message => {

        const div = document.createElement('div');
        div.textContent = message;
        chatBox.appendChild(div);
    });
}

displayChatHistory();

const url = 'https://api.quotable.io/random';
async function receiveMessage() {
    const response = await fetch(url);
    const data = await response.json();

    const dataData = data.content + " - " + data.author;
    const pTag = document.createElement('p');
    pTag.textContent = dataData;
    const bubble = document.createElement('div');
    bubble.classList.add('message', 'received');
    bubble.appendChild(pTag);
    const leftDiv = document.getElementById('chatDiv');
    leftDiv.appendChild(bubble);
    input.value = '';
}








// MOBILE VIEW

//functionalities for future
// Form validation: Adding form validation to a web form can help ensure that users enter the correct information and improve the user experience.

// Carousel/slider: You can add a carousel or slider to display images or content in a visually appealing way.
// Lazy loading: Lazy loading is a technique that delays the loading of images or other resources until they are needed. This can help improve the speed and performance of a website.
// Modal windows: Modal windows can be used to display additional information or content without requiring the user to navigate to a new page.

// Drag-and-drop functionality: Adding drag-and-drop functionality can make it easier for users to upload files or rearrange content on a page.
// Lightbox: A lightbox can be used to display images or other media in a larger view without navigating away from the current page.
// Image gallery: An image gallery can be used to display multiple images in a grid or slideshow format.

// Live search: Adding a live search functionality can help users quickly find the information they need without having to navigate through multiple pages.
// Infinite scrolling: Infinite scrolling can be used to automatically load more content as the user scrolls down the page.
// Video and audio players: You can add custom video and audio players to your website to provide a better user experience for multimedia content.
