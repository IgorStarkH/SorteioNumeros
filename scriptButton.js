const correctNumber = Math.floor(Math.random() * 5) + 1;

function checkNumber(buttonNumber) {
    const message = document.getElementById('message');
    if (buttonNumber === correctNumber) {
        message.textContent = `Você acertou! O botão ${buttonNumber} é o correto.`;
        message.style.color = 'green';
    } else {
        message.textContent = `Você errou! O botão ${buttonNumber} não é o correto.`;
        message.style.color = 'red';
    }
}


function reloadPage() {
    window.location.reload();
}
