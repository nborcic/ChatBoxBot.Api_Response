//Path: script.js
//leftDisp- 
//rightDisp

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        sendMessage();
    }

})
function sendMessage() {

    const inputElement = document.querySelector('#input');
    let message = inputElement.value;
    const bubble = document.querySelector('.message, .sent');
    const rightDiv = document.getElementById('rightDisp');
    bubble.textContent = message;
    rightDiv.appendChild(bubble);
    input.value = '';
    input.focus();

}










