function verifyValidGuess(guess) {
    const number = +guess

    if (invalidGuess(number)) {
        guessElement.innerHTML += `<div>Invalid guess</div>`
        return
    }

    if (guessIsBiggerOrSmaller(number)) {
        guessElement.innerHTML += `<div>Invalid guess: the secret number is between ${smallerValue} and ${biggerValue}</div>`
        return
    }

    if (number === secretNumber) {
        document.body.innerHTML = `
        <h2>You did it!</h2>
        <h3>The secret number is ${secretNumber}</h3>
        `
    } else if (number > secretNumber) {
        guessElement.innerHTML += `<div>The secret number is smaller <i class="fa-sharp fa-solid fa-arrow-down"></i></div>`
    } else {
        guessElement.innerHTML += `<div>The secret number is bigger <i class="fa-sharp fa-solid fa-arrow-up"></i></div>`
    }
}

function invalidGuess(number) {
    return Number.isNaN(number)
}

function guessIsBiggerOrSmaller(number) {
    return number > biggerValue || number < smallerValue
}