function nerdArt() {
  const theString = 'The Flintstones Rock!';
  for (let i = 0; i < 10; i++) {
    console.log(' '.repeat(i) + theString);
  }
}

// Q2 Return a new string that swaps the case of all of the letters:
let munstersDescription = 'The Munsters are creepy and spooky.';

// `tHE mUNSTERS ARE CREEPY AND SPOOKY.`

const swapCase = (letters) => {
  let newPhrase = '';
  for (let index = 0; index < letters.length; index++) {
    if (letters[index] === letters[index].toLowerCase()) {
      newPhrase += letters[index].toUpperCase();
    } else {
      newLetters += letters[i].toLowerCase();
    }
  }
  console.log(newPhrase);
  return newPhrase;
};

// OR

munstersDescription
  .split('')
  .map(function (char) {
    if (char === char.toUpperCase()) {
      return char.toLowerCase();
    } else {
      return char.toUpperCase();
    }
  })
  .join('');


  // Q4 Is there a difference between these implementations, other than the method she used to add an element to the buffer?

  // The first function is mutating the caller itself, while the second is creating a new array. The first would be best for this situation. 

  // Q5 What will the following two lines of code output?

  console.log(0.3 + 0.6); => 0.89999999
  console.log(0.3 + 0.6 === 0.9); => false

  // Q6 What do you think the following code will output?

  let nanArray = [NaN]; => [NaN]

  console.log(nanArray[0] === NaN); => false

  // The output is false. NaN -- not a number -- is a special numeric value that indicates that an operation that was intended to return a number failed. JavaScript doesn't let you use == and === to determine whether a value is NaN.

  // to test NaN use Number.isNan()


  // Q7 What is the output of the following code?

  let answer = 42;

  function messWithIt(someNumber) {
    return (someNumber += 8);
  }
  
  let newAnswer = messWithIt(answer);
  
  console.log(answer - 8);

  // 34


  // Q8 Before Grandpa could stop him, Spot hit the Enter key with his tail. Did the family's data get ransacked? Why or why not?


let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" }
};

function messWithDemographics(demoObject) {
  Object.values(demoObject).forEach(familyMember => {
    familyMember["age"] += 42;
    familyMember["gender"] = "other";
  });
}
messWithDemographics(munsters);

// Yes, the data gets changed because the object is passed by reference, the object starts off pointing to the munsters object. Since the program does not reassign demoObject, it uses it as is and mutates it instead of mutating a copy of it. 

// Q9 What is the result of the following call?

function rps(fist1, fist2) {
    if (fist1 === "rock") {
      return fist2 === "paper" ? "paper" : "rock";
    } else if (fist1 === "paper") {
      return fist2 === "scissors" ? "scissors" : "paper";
    } else {
      return fist2 === "rock" ? "rock" : "scissors";
    }
  }

  console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock"));

  // Results is paper

  // Q 10 What will the following function invocation return?

  function foo(param = "no") {
    return "yes";
  }
  
  function bar(param = "no") {
    return param === "no" ? "yes" : "no";
  }

  bar(foo());

  // It should return 'no'