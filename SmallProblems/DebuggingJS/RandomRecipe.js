/* 



*/

let todos = [
  'wash car',
  'exercise',
  'buy groceries',
  'balance budget',
  'call plumber',
  'feed fido',
  'get gas',
  'organize closet',
];

function addTask(task) {
  if (todos.includes(task)) {
    console.log('That task is already on the list.');
  } else {
    todos.push(task);
  }
}

function completeTasks(n = 1) {
  let tasksComplete = 0;

  while (todos.length > 0 && tasksComplete < n) {
    console.log(`${todos[0]} complete!`);
    delete todos[0];
    tasksComplete++;
  }

  if (todos.length === 0) {
    console.log('All tasks complete!');
  } else {
    console.log(`${tasksComplete} tasks completed; ${todos.length} remaining.`);
  }
}

function displayTaskList() {
  console.log(`ToDo list (${todos.length} tasks):`);
  console.log('---------------------');

  for (let idx = 0; idx < todos.length; idx++) {
    console.log(`-- ${todos[idx]}`);
  }
}

// Utilizing our task manager

addTask('oil change');
addTask('dentist');
addTask('homework');

completeTasks(3);
displayTaskList();

function range(start, end = -1) {
  let range = [];

  for (let element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}

function range(end) {
  return range(0, end);
}

// Examples

console.log(range(10, 20));
console.log(range(5));

let memberDirectory = {
  'Jane Doe': '323-8293',
  'Margaret Asbury': '989-1111',
  'Callum Beech': '533-9090',
  'Juanita Eastman': '424-1919',
};

function isValidName(name) {
  return /^\w+ \w+$/.test(name);
}

function isValidPhone(phone) {
  return /^\d{3}-\d{4}$/.test(phone);
}

function validMemberInfo(name, phone) {
  return isValidName(name) && isValidPhone(phone);
}

function addMember(name, phone) {
  if (validMemberInfo(name, phone)) {
    memberDirectory[name] = phone;
  } else {
    console.log('Invalid member information.');
  }
}

addMember('Laura Carlisle', '444-2223');
addMember('Rachel Garcia', '232-1191');
addMember('Earl 5mith', '331-9191');

console.log(memberDirectory);

// Standard role-playing dice, with 20 faces,
// specified in terms of minimum and maximum face value.

let d20 = { min: 1, max: 20 };

function roll(die) {
  return Math.floor(Math.random() * (die.max - die.min + 1)) + die.min;
}

// Standard target roll tossing a 20-sided die,
// with optional bonus and penalty dice.
// Used to determine whether a character wanting to perform an action
// succeeds or fails, based on whether the sum of the dice is higher
// or lower than the relevant character trait.
// (See below for examples.)
function targetRoll(characterValue) {
  let result = roll(d20);

  console.log('--> ' + result);

  switch (result) {
    case 1:
      automaticFail();
    case 20:
      automaticSuccess();
    default:
      void (result >= characterValue ? success() : fail());
  }
}

function success() {
  console.log('Your character succeeds.');
}

function fail() {
  console.log('Your character fails.');
}

function automaticSuccess() {
  console.log('Your character succeeds without effort. Glory!');
}

function automaticFail() {
  console.log('Meagre attempt. Your character fails miserably.');
}

// Example character.
let myCharacter = {
  name: 'Jenkins',
  strength: 4,
  constitution: 6,
  education: 11,
  luck: 3,
  sanity: 9,
};

// Example rolls:

// Jenkins wants to break in a door with brute force,
// so he has to roll against his strength value.
targetRoll(myCharacter.strength);

// Jenkins found an ancient scroll and attempts to decipher it.
// He has to roll against his education, in order to determine
// whether he's able to read it.
targetRoll(myCharacter.education);

function average(nums) {
  let sum = nums.reduce((total, num) => total + num);

  return sum / nums.length;
}

function median(nums) {
  nums.sort();

  let median;
  let length = nums.length;
  if (length % 2 === 0) {
    median = average([nums[length / 2 - 1], nums[length / 2]]);
  } else {
    median = nums[Math.floor(length / 2)];
  }

  return median;
}

// Tests

let quarter1ExamScores = [89, 72, 100, 93, 64, 97, 82, 87, 90, 94];
let quarter2ExamScores = [76, 91, 89, 90, 91, 67, 99, 82, 91, 87];
let quarter3ExamScores = [99, 91, 88, 72, 76, 64, 94, 79, 86, 88];
let quarter4ExamScores = [100, 94, 73, 88, 82, 91, 97, 99, 80, 84];

// should all log 'true':
console.log(average(quarter1ExamScores) === 86.8);
console.log(average(quarter2ExamScores) === 86.3);
console.log(average(quarter3ExamScores) === 83.7);
console.log(average(quarter4ExamScores) === 88.8);

console.log(median(quarter1ExamScores) === 89.5);
console.log(median(quarter2ExamScores) === 89.5);
console.log(median(quarter3ExamScores) === 87);
console.log(median(quarter4ExamScores) === 89.5);

function toDate(string) {
  return new Date(string + 'T00:00:00');
}

const TODAY = toDate('2018-08-05');

function toString(date) {
  let pad = (string, n) => {
    while (string.length < n) {
      string = '0' + string;
    }
    return string;
  };

  let year = String(date.getFullYear());
  let month = pad(String(date.getMonth() + 1), 2);
  let day = pad(String(date.getDate()), 2);

  return `${year}-${month}-${day}`;
}

function isInThePast(date) {
  return date < TODAY;
}

function isWeekday(date) {
  return date.getDay() >= 1 && date.getDay() <= 5;
}

let myCalendar = {
  '2018-08-13': ['JS debugging exercises'],
  '2018-08-14': ["Read 'Demystifying Rails'", 'Settle health insurance'],
  '2018-08-15': ["Read 'Demystifying Rails'"],
  '2018-08-16': [],
  '2018-08-30': ['Drone video project plan'],
  '2018-09-10': ['Annual servicing of race bike'],
  '2018-09-12': ['Study'],
  '2018-11-02': ['Birthday Party'],
  '2018-11-03': ['Birthday Party'],
};

let offeredClasses = {
  'Back To The Future Movie Night': ['2018-07-30'],
  'Web Security Fundamentals': ['2018-09-10', '2018-09-11'],
  'Pranayama Yoga For Beginners': ['2018-08-30', '2018-08-31', '2018-09-01'],
  "Mike's Hikes": ['2018-08-16'],
  'Gordon Ramsey Master Class': ['2018-09-11', '2018-09-12'],
  'Powerboating 101': ['2018-09-15', '2018-09-16'],
  'Discover Parachuting': ['2018-11-02'],
};

function getCompatibleEvents(classes, calendar) {
  function isAvailable(date) {
    let dateStr = toString(date);
    return !calendar[dateStr] || calendar[dateStr].length === 0;
  }

  let compatibleClasses = [];

  Object.keys(classes).forEach((className) => {
    let classDates = classes[className].map(toDate);

    if (classDates.some(isInThePast)) {
      return;
    }

    if (classDates.filter(isWeekday).every(isAvailable)) {
      compatibleClasses.push(className);
    }
  });

  return compatibleClasses;
}

console.log(getCompatibleEvents(offeredClasses, myCalendar));
// expected: ["Mike's Hikes", "Powerboating 101"]








function neutralize(sentence) {
  let words = sentence.split(' ');

  words.forEach((word) => {
    if (isNegative(word)) {
      const index = words.indexOf(word);
      words.splice(index, 1);
    }
  });
  return words.join(' ');
}

function isNegative(word) {
  return ['dull', 'boring', 'annoying', 'chaotic'].includes(word);
}

console.log(
  neutralize('These dull boring cards are part of a chaotic board game.')
);
// Expected: These cards are part of a board game.
// Actual: These boring cards are part of a board game.
