function makeCounterLogger(num) {
  return function (num2) {
    let counter;
    for (counter = num; counter <= num2; counter++) {
      console.log(counter);
    }
  };
}

let countlog = makeCounterLogger(5);
countlog(8);
