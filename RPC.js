// Get a reference to the button elements by their ids
const rock = document.getElementById('Rock');
const cesar = document.getElementById('Cesar');
const paper = document.getElementById('Paper');
// Get a reference to the result paragraph element
const resultParagraph = document.getElementById('result');
function getrandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function playGame(userChoice) {
    const choices = ['Rock', 'Cesar', 'Paper'];
    const compChoice = choices[getrandomArbitrary(0, 2)];
    if (userChoice === compChoice) {
        resultParagraph.textContent = 'It\'s a tie!';
    }
    else if ((userChoice === 'Rock' && compChoice === 'Cesar') ||
        (userChoice === 'Cesar' && compChoice === 'Paper') ||
        (userChoice === 'Paper' && compChoice === 'Rock')) {
        resultParagraph.textContent = 'You won!';
    }
    else {
        resultParagraph.textContent = 'You lost!';
    }
}
// Add click event listeners to the buttons
rock.addEventListener('click', () => playGame('Rock'));
cesar.addEventListener('click', () => playGame('Cesar'));
paper.addEventListener('click', () => playGame('Paper'));
