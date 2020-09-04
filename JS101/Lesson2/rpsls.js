const readline = require('readline-sync');

const VALID_CHOICES = {
  rock: ['rock', 'r'],
  paper: ['paper', 'p'],
  scissors: ['scissors', 'sc'],
  lizard: ['lizard', 'l'],
  spock: ['spock', 'sp'],
};

const WINNING_COMBOS = {
  rock: ['scissors', 'lizard'],
  paper: ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  lizard: ['paper', 'spock'],
  spock: ['rock', 'scissors'],
};

const totalScore = {
  player: 0,
  computer: 0,
};

function prompt(message) {
  console.log(`=> ${message}`);
}

function getPlayerChoice() {
  prompt(
    `Choose one: r (rock), p (paper), sc (scissors), l (lizard), or sp (spock)`
  );
  let choice = readline.question();

  let answerChoices = [];

  Object.keys(VALID_CHOICES).forEach((key) => {
    answerChoices.push(VALID_CHOICES[key]);
  });

  while (!answerChoices.flat().includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  return Object.keys(VALID_CHOICES).find(
    (key) => VALID_CHOICES[key][1] === choice
  );
}

function getComputerChoice() {
  let answerChoices = [];

  Object.keys(VALID_CHOICES).forEach((key) => {
    answerChoices.push(VALID_CHOICES[key][0]);
  });

  let randomIndex = Math.floor(Math.random() * answerChoices.length);

  return answerChoices[randomIndex];
}

function playerWins(playerChoice, computerChoice) {
  return WINNING_COMBOS[playerChoice].includes(computerChoice);
}

function resetScores(scoreboard) {
  scoreboard.computer = 0;
  scoreboard.player = 0;
}

function keepScore(playerChoice, computerChoice, scoreboard) {
  let playerScore = scoreboard.player;
  let computerScore = scoreboard.computer;

  if (playerWins(playerChoice, computerChoice)) {
    scoreboard.player += 1;
    playerScore = scoreboard.player;
    computerScore = scoreboard.computer;
  } else {
    scoreboard.computer += 1;
    computerScore = scoreboard.computer;
    playerScore = scoreboard.player;
  }
  prompt(`The score is now Player: ${playerScore} Computer: ${computerScore}`);

  if (playerScore === 5) {
    prompt('Player has scored 5 victories and is the Grand Champion!');
    resetScores(totalScore);
  } else if (computerScore === 5) {
    prompt('Computer has scored 5 victories and is the Grand Champion!');
    resetScores(totalScore);
  }
}

function displayWinner(playerChoice, computerChoice) {
  prompt(`You chose ${playerChoice}, computer chose ${computerChoice}`);
  if (playerWins(playerChoice, computerChoice)) {
    prompt('You win!');
  } else if (playerChoice === computerChoice) {
    prompt("It's a tie!");
  } else {
    prompt('Computer wins!');
  }
}

while (true) {
  let playerChoice = getPlayerChoice();
  let computerChoice = getComputerChoice();

  displayWinner(playerChoice, computerChoice);

  keepScore(playerChoice, computerChoice, totalScore);

  prompt('Do you want to play again?');
  let answer = readline.question();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;
}
