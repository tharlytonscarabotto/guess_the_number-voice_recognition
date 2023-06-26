const guessElement = document.getElementById('guess')

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = 'pt-BR'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak (e) {
    guess = e.results[0][0].transcript
    showGuess(guess)
}
function showGuess (guess) {
    guessElement.innerHTML = `
    <div>Your guess is:</div>
    <span class="box">${guess}</span>
    `
}

