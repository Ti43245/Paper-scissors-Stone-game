function userChoice(choice) {
    const computerChoices = ['rock', 'paper', 'scissors'];
    const computerChoice = computerChoices[Math.floor(Math.random() * 3)];

    const result = determineWinner(choice, computerChoice);

    document.getElementById('result').innerText = `You chose ${choice}. Computer chose ${computerChoice}. ${result}`;
}

function determineWinner(user, computer) {
    if (user === computer) {
        return "It's a tie!";
    }

    if ((user === 'rock' && computer === 'scissors') ||
        (user === 'paper' && computer === 'rock') ||
        (user === 'scissors' && computer === 'paper')) {
        return 'You win!';
    } else {
        return 'Computer wins!';
    }
}