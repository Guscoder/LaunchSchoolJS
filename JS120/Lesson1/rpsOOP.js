/* eslint-disable max-lines-per-function */
// nouns: player, move, rule
// verbs: choose, compare

const readline = require('readline-sync');

function createPlayer() {
  return {
    move: null,
    score: 0,
    handHistory: [],
    choiceCount: { rock: 0, scissors: 0, paper: 0, lizard: 0, spock: 0 },
  };
}

function createComputer() {
  let playerObject = createPlayer();

  let computerObject = {
    choose() {
      const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
      let randomIndex = Math.floor(Math.random() * choices.length);
      this.move = choices[randomIndex];
      this.handHistory.push(this.move);
      this.choiceCount[this.move] += 1;
    },
  };
  return Object.assign(playerObject, computerObject);
}

function createHuman() {
  let playerObject = createPlayer();

  let humanObject = {
    choose() {
      let choice;

      while (true) {
        console.log(
          'Please choose rock (r), paper (p), scissors (ss), lizard (l), or spock (s):'
        );
        choice = readline.question().toLowerCase();
        if (
          [
            'rock',
            'paper',
            'scissors',
            'lizard',
            'spock',
            'r',
            'p',
            'ss',
            'l',
            's',
          ].includes(choice)
        ) {
          switch (choice) {
            case 'r':
              choice = 'rock';
              break;
            case 'ss':
              choice = 'scissors';
              break;
            case 'p':
              choice = 'paper';
              break;
            case 'l':
              choice = 'lizard';
              break;
            case 's':
              choice = 'spock';
              break;
            default:
              return choice;
          }
          this.handHistory.push(choice);
          this.choiceCount[choice] += 1;
          break;
        }
        console.log('Sorry, invalid choice.');
      }
      this.move = choice;
    },
  };

  return Object.assign(playerObject, humanObject);
}

const RPSGame = {
  WINNING_MOVES: {
    scissors: ['paper', 'lizard'],
    paper: ['rock', 'spock'],
    rock: ['lizard', 'scissors'],
    lizard: ['spock', 'paper'],
    spock: ['scissors', 'rock'],
  },

  human: createHuman(),
  computer: createComputer(),

  displayWelcomeMessage() {
    console.log('Welcome to Rock, Paper, Scissors, Lizard, Spock');
  },
  displayGoodbyeMessage() {
    console.log(
      'Thanks for playing Rock, Paper, Scissors, Lizard, Spock. Goodbye!'
    );
  },
  displayWinner() {
    let winner = this.determineWinner();
    switch (winner) {
      case 'human':
        console.log('Congratulations, you win!');
        break;
      case 'computer':
        console.log('The computer wins!');
        break;
      case 'tie':
        console.log("It's a tie!");
        break;
      default:
        break;
    }
  },
  determineWinner() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;
    console.log(`You chose: ${this.human.move}`);
    console.log(`The computer chose: ${this.computer.move}`);

    if (this.WINNING_MOVES[humanMove].includes(computerMove)) {
      this.updateScore('human');
      return 'human';
    } else if (humanMove === computerMove) {
      return 'tie';
    } else {
      this.updateScore('computer');
      return 'computer';
    }
  },
  updateScore(roundWinner) {
    if (roundWinner === 'human') {
      this.human.score += 1;
    } else if (roundWinner === 'computer') {
      this.computer.score += 1;
    }
  },
  displayScore() {
    console.log(
      `The score is now Computer: ${this.computer.score}, You: ${this.human.score}`
    );
  },
  playAgain() {
    console.log('Would you like to play again? (y/n)');
    let answer = readline.question();
    return answer.toLowerCase()[0] === 'y';
  },
  isMatchOver() {
    return this.human.score === 5 || this.computer.score === 5;
  },
  displayMatchScore() {
    console.log(
      `The final score is Computer ${this.computer.score}, You ${this.human.score}. Match complete!`
    );
  },
  displayHandHistory() {
    console.log(
      'Would you like to see the hand history so far? Enter yes(y) or no(n).'
    );
    let choice = readline.question();
    if (choice.toLowerCase() === 'y') {
      console.log('The history of your choices has been: ');
      this.human.handHistory.forEach((move) => console.log(move));
      console.log('The history of the computer choices has been: ');
      this.computer.handHistory.forEach((move) => console.log(move));
    }
  },
  play() {
    this.displayWelcomeMessage();
    while (true) {
      this.human.choose();
      this.computer.choose();
      this.displayWinner();
      this.updateScore();
      this.displayScore();
      this.displayHandHistory();
      if (this.isMatchOver()) {
        this.displayMatchScore();
        break;
      }
      if (!this.playAgain()) break;
    }
    this.displayGoodbyeMessage();
  },
};

RPSGame.play();
