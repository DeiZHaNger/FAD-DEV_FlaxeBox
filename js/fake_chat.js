let data = new URLSearchParams(location.search);

const pseudoFields = document.querySelectorAll('.userID');
let pseudo = data.get('pseudo');
if (!pseudo) {pseudo = 'Anonymous'}

pseudoFields.forEach(element => {element.innerText = pseudo});
document.querySelector('#pseudo').value = pseudo;

const formField = document.querySelector('form');
formField.addEventListener('submit', function (element) {
    element.preventDefault();
    const chatWindow = document.querySelector('#chat_display');
    const messageTxt = document.querySelector('#message').value;
    if (messageTxt) {
        const messageElement = document.createElement('p');
        messageElement.innerText = messageTxt;

        chatWindow.removeChild(chatWindow.firstElementChild);
        chatWindow.appendChild(messageElement);
    }
}); 