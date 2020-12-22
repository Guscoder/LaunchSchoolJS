function download(locationOfFile, errorHandler) {
  // try to download the file
  if (gotError) {
    errorHandler(reasonCode);
  }
}

function errorDetected(url, reason) {
  // handle the error
}

download("https://example.com/foo.txt" /* ??? */);

// Use bind to perform partial func application

let url = "https://example.com/foo.txt";
download(url, errorDetected.bind(null, url));

// OR create partial func application

function makeErrorHandlerFor(locationOfFile) {
  return function (reason) {
    errorDetected(locationOfFile, reason);
  };
}

let url = "https://example.com/foo.txt";
download(url, makeErrorHandlerFor(url));

// Write a function named makeMultipleLister that you can call with a number as an argument. The function should return a new function that, when invoked, logs every positive integer multiple of that number less than 100. It should work like this:

function makeMultipleLister(num) {
  return function (num) {
    let num2 = Math.floor(100 / num);
    for (let index = 1; index <= num2; index++) {
      console.log(num * index);
    }
  };
}

let lister = makeMultipleLister(17);
lister();
