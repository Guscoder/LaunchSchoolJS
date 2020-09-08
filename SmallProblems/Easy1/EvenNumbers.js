for (let x = 2; x < 100; x += 2) {
  console.log(x);
}

// alternative

for (let number = 1; number < 100; number += 1) {
  if (number % 2 === 1) {
    continue;
  }

  console.log(number);
}
