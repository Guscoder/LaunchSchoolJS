/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */

// Create constructor function

function Player() {
  this.move = null;
}

// Create constructor function for a Human player
function Human() {
  Player.call(this); // need to create a Human object by using Player constructor and assign context of 'this' to the new Human object
}
// If I later added function to PLAYER, then I woul dneed to assign the Player prtotype to Human and Computer so they would have access to the methods on PLAYER
// Human.prototype = Object.create(Player.prototype);
// Human.prototype.constructor = Human;

// Create method for all Human objects/players by setting a choose method in the Human prototype so all Human objects have access to this choose method
Human.prototype.choose = function () {
  let choice;

  while (true) {
    console.log('Please choose rock, paper, or scissors:');
    choice = readline.question();
    if (['rock', 'paper', 'scissors'].includes(choice)) break;
    console.log('Sorry, invalid choice.');
  }

  this.move = choice;
};

// Create constructor function for a Computer player
function Computer() {
  Player.call(this); // need to create a Computer object by using Player constructor and assign context of 'this' to the new Computer object
}

// Create method for all Computer objects/players
Computer.prototype.choose = function () {
  const choices = ['rock', 'paper', 'scissors'];
  let randomIndex = Math.floor(Math.random() * choices.length);
  this.move = choices[randomIndex];
};

function RPSgame() {
  this.human = new Human();
  this.computer = new Computer();
}

// Assign constructor for prototype
RPSgame.prototype.constructor = RPSgame;

// Create prototype object for constructor function
RPSgame.prototype = {
  displayWelcomeMessage() {
    console.log('Welcome to Rock, Paper, Scissors!');
  },

  displayGoodbyeMessage() {
    console.log('Thanks for playing Rock, Paper, Scissors. Goodbye!');
  },

  displayWinner() {
    console.log(`You chose: ${this.human.move}`);
    console.log(`The computer chose: ${this.computer.move}`);

    let humanMove = this.human.move;
    let computerMove = this.computer.move;

    if (
      (humanMove === 'rock' && computerMove === 'scissors') ||
      (humanMove === 'paper' && computerMove === 'rock') ||
      (humanMove === 'scissors' && computerMove === 'paper')
    ) {
      console.log('You win!');
    } else if (
      (humanMove === 'rock' && computerMove === 'paper') ||
      (humanMove === 'paper' && computerMove === 'scissors') ||
      (humanMove === 'scissors' && computerMove === 'rock')
    ) {
      console.log('Computer wins!');
    } else {
      console.log("It's a tie");
    }
  },

  playAgain() {
    console.log('Would you like to play again? (y/n)');
    let answer = readline.question();
    return answer.toLowerCase()[0] === 'y';
  },

  play() {
    this.displayWelcomeMessage();
    while (true) {
      this.human.choose();
      this.computer.choose();
      this.displayWinner();
      if (!this.playAgain()) break;
    }

    this.displayGoodbyeMessage();
  },
};
