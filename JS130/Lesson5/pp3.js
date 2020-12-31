setTimeout(function () {
  //
  console.log("Once"); //
}, 1000);

setTimeout(function () {
  //
  console.log("upon"); //
}, 3000);

setTimeout(function () {
  //
  console.log("a"); //
}, 2000);

setTimeout(function () {
  //
  console.log("time"); //
}, 4000);

setTimeout(function () {
  setTimeout(function () {
    q(); // 7
  }, 15);

  d(); // 3

  setTimeout(function () {
    n();
  }, 5); // 5

  z(); // 4
}, 10);

setTimeout(function () {
  s();
}, 20); // 6

setTimeout(function () {
  f(); // 2
});

g(); // 1
