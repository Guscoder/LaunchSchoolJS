// Write a delegate function that can be used to delegate the behavior of a method or function to another object's method. delegate takes a minimum of two arguments: (1) the object and (2) name of the method on the object. The remaining arguments, if any, are passed — as arguments — to the objects' method that it delegates to.

function delegate(context, method) {
  let args = Array.prototype.slice.call(arguments, 2);

  return function () {
    return context[method].apply(context, args);
  };
}

// OR

// const delegate = (context, methodName, ...args) => {
//     return function() {
//       return context[methodName].apply(context, args);
//     };
//   }

let foo = {
  name: "test",
  bar: function (greeting) {
    console.log(greeting + " " + this.name);
  },
};

let baz = {
  qux: delegate(foo, "bar", "hello"),
};

baz.qux(); // logs 'hello test';

foo.bar = function () {
  console.log("changed");
};

baz.qux(); // logs 'changed'
