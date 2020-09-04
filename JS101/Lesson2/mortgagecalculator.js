let loanAmount, apr, loanDuration, monthlyInterestRate;

// input loan amount, apr and duration
// change apr to monthly rate
// check/convert duration to months

function convertApr(apr) {
  return apr / 100 / 12;
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function isInvalidNumber(number) {
  return (
    number.trim() === '' || Number(number) < 0 || Number.isNaN(Number(number))
  );
}

function payment(loanAmount, loanDuration, monthlyInterestRate) {
  if (monthlyInterestRate === 0) {
    let amount = loanAmount / loanDuration;
    return amount.toFixed(2);
  } else {
    let amount =
      loanAmount *
      (monthlyInterestRate /
        (1 - Math.pow(1 + monthlyInterestRate, -loanDuration)));
    return amount.toFixed(2);
  }
}
const readline = require('readline-sync');

while (true) {
  prompt('What is the amount of your loan?');
  loanAmount = readline.question();

  while (isInvalidNumber(loanAmount)) {
    prompt('Must enter a positive number');
    loanAmount = readline.question();
  }

  prompt('What is the Annual Interest Rate?');
  prompt('(Example: 5 for 5% or 2.5 for 2.5%)');
  apr = readline.question();

  while (isInvalidNumber(apr)) {
    prompt('Must enter a positive number');
    apr = readline.question();
  }

  prompt('What is the duration of your loan in full years?');
  loanDuration = readline.question();

  while (isInvalidNumber(loanDuration)) {
    prompt('Must enter a positive number');
    loanDuration = readline.question();
  }

  loanDuration *= 12;

  monthlyInterestRate = convertApr(apr);

  let finalMonthlyPayment = payment(
    loanAmount,
    loanDuration,
    monthlyInterestRate
  );

  prompt(`Your monthly payment will be $${finalMonthlyPayment}`);

  prompt('Another calculation?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please answer "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] === 'n') break;
}
