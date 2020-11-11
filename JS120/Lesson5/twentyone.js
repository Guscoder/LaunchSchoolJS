/* eslint-disable max-lines-per-function */
const readline = require('readline-sync');

class Card {
  constructor(suit, rank, value) {
    this.suit = suit;
    this.value = value;
    this.rank = rank;
  }
}

class Deck {
  static CARD_VALUES = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
  static CARD_SUITS = ['hearts', 'spades', 'diamonds', 'clubs'];
  constructor() {
    this.deck = [];
    this.reset();
  }
  reset() {
    this.deck = [];
    Deck.CARD_SUITS.forEach((suit) => {
      Deck.CARD_VALUES.forEach((rank) => {
        let value;
        switch (rank) {
          case 'J':
          case 'Q':
          case 'K':
            value = 10;
            break;
          case 'A':
            value = 11;
            break;
          default:
            value = rank;
            break;
        }
        let card = new Card(suit, rank, value);
        this.deck.push(card);
      });
    });
  }
  deal(numOfCards, hand) {
    for (let index = 0; index < numOfCards; index++) {
      let randomIndex = Math.floor(Math.random() * this.deck.length);
      hand.push(this.deck[randomIndex]);
      this.deck.splice(randomIndex, 1);
    }
  }
}

class Participant {
  constructor() {
    this.hand = [];
    this.score = 0;
    this.BUST_NUMBER = 21;
  }
  hit(deck) {
    deck.deal(1, this.hand);
  }

  isBusted() {
    return this.score > this.BUST_NUMBER;
  }

  addScore() {
    let haveAce = false;
    this.score = 0;
    this.hand.forEach((card) => {
      this.score += card.value;
      if (card.rank === 'A') {
        haveAce = true;
      }
    });
    if (haveAce && this.score > this.BUST_NUMBER) {
      this.score -= 10;
    }
    return this.score;
  }
}

class Player extends Participant {
  constructor(hand, score) {
    super(hand, score);
    this.funds = 5;
  }
  showCards() {
    let handDetails = '';
    this.hand.forEach((card) => {
      handDetails += card.rank + ' ' + card.suit + ' ';
    });
    this.addScore();
    console.log(
      `\nYour cards are: \n${handDetails}\nFor a total of ${this.score} points.\n`
    );
  }
}

class Dealer extends Participant {
  constructor(hand, score) {
    super(hand, score);
    this.STAND_NUMBER = 17;
  }
  showFirstDealerCard() {
    let firstCard = this.hand[0].rank + ' ' + this.hand[0].suit;
    console.log(`The Dealer has ${firstCard} and an unknown card.`);
  }
  showAllCards() {
    let handDetails = '';
    this.hand.forEach((card) => {
      handDetails += card.rank + ' ' + card.suit + ' ';
    });
    console.log(
      `\nDealer cards are: \n${handDetails}\nFor a total of ${this.addScore()} points.\n`
    );
  }
}
class TwentyOneGame {
  constructor() {
    this.human = new Player();
    this.dealer = new Dealer();
    this.deck = new Deck();
    this.BUST_NUMBER = 21;
    this.LOSING_FUNDS = 0;
    this.WINNING_FUNDS = 10;
  }
  start() {
    this.displayWelcomeMessage();
    while (true) {
      this.dealCards();
      this.showStartingCards();
      this.playerTurn();
      if (this.human.score <= this.BUST_NUMBER) {
        this.dealerTurn();
      }
      this.determineWinner();
      if (this.matchOver()) {
        break;
      }
      if (this.playAgain()) {
        this.resetGame();
      } else {
        break;
      }
    }
    this.displayGoodbyeMessage();
  }
  resetGame() {
    this.human.hand = [];
    this.dealer.hand = [];
    this.deck = new Deck();
    console.clear();
  }
  playAgain() {
    console.log('-------------');
    let answer;
    console.log('Do you want to play again? (y or n)');
    answer = readline.question().toLowerCase()[0];
    return answer === 'y';
  }
  dealCards() {
    //STUB
    this.deck.deal(2, this.human.hand);
    this.deck.deal(2, this.dealer.hand);
  }

  showStartingCards() {
    this.human.showCards();
    this.dealer.showFirstDealerCard();
  }

  // eslint-disable-next-line max-statements
  playerTurn() {
    while (this.human.score < this.BUST_NUMBER) {
      console.log('Do you want to hit (h) or stay (s)?');
      let playerChoice = readline.question().toLowerCase()[0];

      if (playerChoice === 'h') {
        this.human.hit(this.deck);
        this.human.addScore();
        this.human.showCards();
        if (this.human.isBusted()) {
          console.log('You are over 21 -- you have BUSTED!');
          this.human.funds -= 1;
          console.log(`You have $${this.human.funds} remaining.`);
          break;
        }
      } else if (playerChoice === 's') {
        console.log(
          `The Player will now stand with ${this.human.score} points\n`
        );
        break;
      } else {
        console.log('Please enter h or s.');
      }
    }
  }

  dealerTurn() {
    this.dealer.showAllCards();
    while (this.dealer.addScore() < this.dealer.STAND_NUMBER) {
      console.log('Dealer will take another card.');
      this.dealer.hit(this.deck);
      this.dealer.addScore();
      this.dealer.showAllCards();
    }
    if (this.dealer.isBusted()) {
      this.human.funds += 1;
      console.log('Dealer is over 21 -- you WIN!');
      console.log(`You have $${this.human.funds} remaining.`);
    } else {
      console.log(
        `The dealer will now stand with ${this.dealer.score} points\n`
      );
    }
  }

  displayWelcomeMessage() {
    //STUB
    console.log('Welcome to the fabulous game of 21!');
  }

  displayGoodbyeMessage() {
    //STUB
    console.log('Thanks for playing 21!');
  }
  determineWinner() {
    if (
      this.human.score <= this.BUST_NUMBER &&
      this.dealer.score <= this.BUST_NUMBER
    ) {
      if (this.human.score > this.dealer.score) {
        this.human.funds += 1;
        console.log('You beat the dealer! You win $1!');
        console.log(`You have $${this.human.funds} remaining.`);
      } else if (this.dealer.score >= this.human.score) {
        this.human.funds -= 1;
        console.log('The dealer wins! You lose $1. Go home and practice!');
        console.log(`You have $${this.human.funds} remaining.`);
      }
    }
  }
  matchOver() {
    return (
      this.human.funds === this.LOSING_FUNDS ||
      this.human.funds === this.WINNING_FUNDS
    );
  }
  displayResult() {
    //STUB
  }
}

let game = new TwentyOneGame();
game.start();
