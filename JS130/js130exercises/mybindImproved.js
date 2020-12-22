function myBind(func, context) {
  console.log(arguments);
  let partialArgs = [].slice.apply(arguments, [2]);
  console.log(partialArgs);

  return function () {
    let remainingArgs = [].slice.apply(arguments);
    console.log(remainingArgs);

    let fullArgs = partialArgs.concat(remainingArgs);
    console.log(fullArgs);

    return func.apply(context, fullArgs);
  };
}

function addNumbers(a, b) {
  return a + b;
}

let addFive = myBind(addNumbers, null, 5, 8);

addFive(10); // 15

// OR

// const myBind = (func, ctx, ...args) => {
//   let partialArgs = args;

//   return (...restArgs) => {
//     let remainingArgs = restArgs
//     let fullArgs = partialArgs.concat(remainingArgs);

//     return func.apply(ctx, fullArgs);
//   }
// }
