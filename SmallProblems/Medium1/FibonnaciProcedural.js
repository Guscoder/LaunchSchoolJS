const fibonacci = (num) => {
  let prevTwo = [1, 1];

  for (let index = 3; index <= num; index++) {
    prevTwo = [prevTwo[1], prevTwo[0] + [prevTwo[1]]];
  }
  return prevTwo[1];
};
