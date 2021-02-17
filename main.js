/*Logic for a game of Rock Paper Scissors Lizard spock
using a random number generator vs the player's choice */

function playGame() {
  alert(result);
}

//Random number between 0 and 4
let randomNumber = Math.floor(Math.random() * 5);

//Initialize opponent
let opponent = '';

//switch random number for opponent's choice
switch (randomNumber) {
  case 0:
    opponent = 'Rock';
    break;
  case 1:
    opponent = 'Paper';
    break;
  case 2:
    opponent = 'Scissors';
    break;
  case 3:
    opponent = 'Lizard';
    break;
  case 4:
    opponent = 'Spock';
    break;
}

console.log(opponent);

//get player choice from html
let userAnswer = document.getElementsByTagName('button1');

//initialize player choice
let player = '';

//translate player choice from number to text
switch (userAnswer) {
  case 0:
    player = 'Rock';
    break;
  case 1:
    player = 'Paper';
    break;
  case 2:
    player = 'Scissors';
    break;
  case 3:
    player = 'Lizard';
    break;
  case 4:
    player = 'Spock';
    break;
}

console.log(player);

// Initialize Outcome
let outcome = '';

// Get outcome of game
switch (outcome) {
  case player == opponent:
    outcome = 'Tie! Try Again!';
    break;
  case player === 'Rock' || opponent === 'Paper':
    outcome = 'Paper covers Rock. You Lose.';
    break;
  case player === 'Rock' || opponent === 'Scissors':
    outcome = 'Rock crushes Scissors. You Win!';
    break;
  case player === 'Rock' || opponent === 'Lizard':
    outcome = 'Rock squishes Lizard. You Win!';
    break;
  case player === 'Rock' || opponent === 'Spock':
    outcome = 'Spock phasers Rock. You Lose.';
    break;
  case player === 'Paper' || opponent === 'Rock':
    outcome = 'Paper covers Rock. You Win!';
    break;
  case player === 'Paper' || opponent === 'Scissors':
    outcome = 'Scissors cut Paper. You Lose.';
    break;
  case player === 'Paper' || opponent === 'Lizard':
    outcome = 'Lizard eats Paper. You Lose.';
    break;
  case player === 'Paper' || opponent === 'Spock':
    outcome = 'You disprove Spock... What is this world coming to?';
    break;
  case player === 'Scissors' || opponent === 'Rock':
    outcome = 'Rock breaks Scissors. You Lose.';
    break;
  case player === 'Scissors' || opponent === 'Paper':
    outcome = 'Scissors cut Paper. You Win!';
    break;
  case player === 'Scissors' || opponent === 'Lizard':
    outcome = 'Scissors decapitate Lizard. You Win!';
    break;
  case player === 'Scissors' || opponent === 'Spock':
    outcome = 'Spock breaks Scissors. You Lose.';
    break;
  case player === 'Lizard' || opponent === 'Rock':
    outcome = 'Rock crushes Lizard.You Lose.';
    break;
  case player === 'Lizard' || opponent === 'Paper':
    outcome = 'Lizard eats Paper. You Win!';
    break;
  case player === 'Lizard' || opponent === 'Scissors':
    outcome = 'Scissors decapitate Lizard. You Lose.';
    break;
  case player === 'Lizard' || opponent === 'Spock':
    outcome = 'Lizard posions Spock. You Monster.';
    break;
  case player === 'Spock' || opponent === 'Rock':
    outcome = 'Spock phasers Rock. You Win!';
    break;
  case player === 'Spock' || opponent === 'Paper':
    outcome = 'Paper disproves Spock. What is this world coming to?';
    break;
  case player === 'Spock' || opponent === 'Scissors':
    outcome = 'Spock breaks Scissors. You Win!';
    break;
  case player === 'Spock' || opponent === 'Lizard':
    outcome = 'Lizard posions Spock. You Lose.';
    break;
}
