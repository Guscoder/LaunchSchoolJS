/* eslint-disable max-lines-per-function */
/* 1. Initialize deck
2. Deal cards to player and dealer
3. Player turn: hit or stay
   - repeat until bust or stay
4. If player bust, dealer wins.
5. Dealer turn: hit or stay
   - repeat until total >= 17
6. If dealer busts, player wins.
7. Compare cards and declare winner.

Data Structures:
1. Deck: array of card numbers, + array of suits = deck nested array
2. Player cards: nested array
3. Dealer cards: nested array

Calculate value of aces depending on the cards in the hand

Player turn hit/stand/bust

Shuffle cards

Dealer turn

Display result

*/
const readline = require('readline-sync');

let deck = [];
const CARD_VALUES = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
const CARD_SUITS = ['h', 's', 'd', 'c'];
let playerHand = [];
let dealerHand = [];
let score = {
  player: 0,
  dealer: 0,
};
const WINNING_POINTS = 5;
const BUST_NUMBER = 21;
const DEALER_STAND = 17;

// Create Deck
function initializeDeck() {
  CARD_SUITS.forEach((suit) => {
    CARD_VALUES.forEach((value) => {
      let card = [suit, value];
      deck.push(card);
    });
  });
}

// Deal Cards

function dealCard(player, num = 2) {
  for (let index = 0; index < num; index++) {
    let randomIndex = Math.floor(Math.random() * deck.length);
    player.push(deck[randomIndex]);
  }
  return player;
}

// Evaluate total value of cards
function addValueOfCards(hand) {
  let haveAce = false;
  let total = 0;
  hand.forEach((card) => {
    switch (card[1]) {
      case 'J':
      case 'Q':
      case 'K':
        total += 10;
        break;
      case 'A':
        haveAce = true;
        total += 11;
        break;
      default:
        total += card[1];
    }
  });
  if (haveAce && total > BUST_NUMBER) {
    return total - 10;
  } else {
    return total;
  }
}

function showHand(hand, total, name) {
  let handDetails = '';
  hand.forEach((card) => {
    handDetails += String(card[1]) + card[0] + ' ';
  });
  console.log(
    `\n${name} cards are: \n${handDetails}\nFor a total of ${total} points.\n`
  );
}
function showDealerCard(hand) {
  let firstCard = String(hand[0][1] + hand[0][0]);
  console.log(`The Dealer has ${firstCard} and an unknown card.`);
}

function playerTurn(hand, dealerCards, total) {
  // Show players their cards
  showHand(hand, total, 'Your');
  showDealerCard(dealerCards);

  while (total < BUST_NUMBER) {
    console.log('Do you want to hit (h) or stay (s)?');
    let playerChoice = readline.question();

    if (playerChoice === 'h') {
      dealCard(playerHand, 1);
      total = addValueOfCards(playerHand);
      showHand(playerHand, total, 'Your');
    } else if (playerChoice === 's') {
      console.log(`\nPlayer stands at ${total}!`);
      return false;
    }
    if (total > BUST_NUMBER) {
      score.dealer += 1;
      console.log('You Busted!');
    } else {
      console.log(`The Player will now stand with ${total} points\n`);
    }
  }
}

function dealerTurn(hand, total) {
  while (total < DEALER_STAND) {
    dealCard(hand, 1);
    total = addValueOfCards(dealerHand);
    showHand(dealerHand, total, 'Dealer');
  }

  if (total > BUST_NUMBER) {
    score.player += 1;
    console.log('Dealer Busted!');
  } else {
    console.log(`The dealer will now stand with ${total} points\n`);
  }
}

function determineWinner(playerTotal, dealerTotal) {
  if (playerTotal <= BUST_NUMBER && dealerTotal <= BUST_NUMBER) {
    if (playerTotal > dealerTotal) {
      score.player += 1;
      console.log('You beat the dealer! You win!');
    } else if (dealerTotal > playerTotal) {
      score.dealer += 1;
      console.log('The dealer wins! Go home and practice!');
    } else {
      console.log("It's a tie, how boring...");
    }
  }
}

function showScore() {
  console.log(
    `The score is now Player: ${score.player}, Dealer: ${score.dealer}`
  );
}

function matchOver() {
  if (score.player === WINNING_POINTS) {
    console.log('The match is over--player wins!');
  } else if (score.dealer === WINNING_POINTS) {
    console.log(`The match is over--dealer wins!`);
  }
}

function playAgain() {
  console.log('-------------');
  let answer;
  while (true) {
    console.log('Do you want to play again? (y or n)');
    answer = readline.question();
    if (answer.toLowerCase()[0] === 'y') {
      break;
    } else if (answer.toLowerCase()[0] === 'n') {
      break;
    } else {
      console.log('You must enter y or n.');
    }
  }
  return answer.toLowerCase()[0] === 'y';
}

function resetGame() {
  dealerHand = [];
  playerHand = [];
  deck = [];
}

// MAIN PROGRAM
while (true) {
  initializeDeck();

  while (true) {
    // Deal original hands to player and dealer
    dealCard(playerHand, 2);
    dealCard(dealerHand, 2);

    // Get total of current hand
    let playerTotal = addValueOfCards(playerHand);
    let dealerTotal = addValueOfCards(dealerHand);

    // Player Turn
    playerTurn(playerHand, dealerHand, playerTotal);

    if (addValueOfCards(playerHand) <= BUST_NUMBER) {
      dealerTurn(dealerHand, dealerTotal);
    } else {
      console.log('Game over! Dealer wins!');
      break;
    }

    playerTotal = addValueOfCards(playerHand);
    dealerTotal = addValueOfCards(dealerHand);

    determineWinner(playerTotal, dealerTotal);
    break;
  }
  showScore();

  if (score.player < WINNING_POINTS && score.dealer < WINNING_POINTS) {
    while (true) {
      let answer = playAgain();
      if (!answer) {
        console.log('Thanks for playing!');
        return false;
      } else {
        resetGame();
        break;
      }
    }
  } else {
    matchOver();
    break;
  }
}
