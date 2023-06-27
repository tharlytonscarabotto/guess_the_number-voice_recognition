const smallerValue = 1
const biggerValue = 1000
const secretNumber = createRandomNumber()

function createRandomNumber() {
    return parseInt(Math.random() * biggerValue +1);
}

console.log(secretNumber)

document.getElementById('smaller-value').innerHTML = smallerValue;
document.getElementById('bigger-value').innerHTML = biggerValue;