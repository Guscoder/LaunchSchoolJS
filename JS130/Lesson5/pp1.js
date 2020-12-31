// Write a JavaScript function named delayLog that loops through the numbers from 1 to 10, and logs each number after that number of seconds. It should log 1 after 1 second, 2 after 2 seconds, and so on.

function delayLog() {
  for (let index = 1; index <= 10; index++) {
    setTimeout(() => console.log(index), index * 1000);
  }
}

delayLog();
