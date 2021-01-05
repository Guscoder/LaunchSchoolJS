/* eslint-disable max-len */
/* Write a delegate function that can be used to delegate the behavior of a method or function to another object's method. delegate takes a minimum of two arguments: (1) the object and (2) name of the method on the object. The remaining arguments, if any, are passed — as arguments — to the objects' method that it delegates to. */

const delegate = (context, methodName, ...args) => {
  return function () {
    return context[methodName].apply(context, args);
  };
};

// myBind function

function myBind(func, ctx) {
  let partialArgs = [].slice.apply(arguments, [2]);

  return function () {
    let remainingArgs = [].slice.apply(arguments);
    let fullArgs = partialArgs.concat(remainingArgs);

    return func.apply(ctx, fullArgs);
  };
}

// or

const myBind = (func, ctx, ...args) => {
  let partialArgs = args;

  return (...restArgs) => {
    let remainingArgs = restArgs;
    let fullArgs = partialArgs.concat(remainingArgs);

    return func.apply(ctx, fullArgs);
  };
};

/* Using OLOO create an Account prototype object that anonymizes user objects on init. The created object should not have access to the function that anonymizes a user other than through the init and reanonymize methods. The function that anonymizes creates a 16 character sequence composed of letters and numbers. The following are the properties and methods on the Account object: Other than the above properties, methods, and properties inherited from Object.prototype, no other method or property should exist on the object returned by the Account prototype object. */

//The key part of this solution is the use of an IIFE to create a private scope that is only accessible to the object returned when executing Object.create(Account).

let Account = (function () {
  let userEmail;
  let userPassword;
  let userFirstName;
  let userLastName;

  function isValidPassword(testPassword) {
    return userPassword === testPassword;
  }

  function getRandomLetterNumber() {
    let randomIndex = Math.floor(Math.random() * 62);
    return "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRTSUVWXYZ1234567890"[
      randomIndex
    ];
  }

  function anonymize() {
    let result = "";

    for (let i = 0; i < 16; i += 1) {
      result += getRandomLetterNumber();
    }

    return result;
  }

  return {
    init: function (email, password, firstName, lastName) {
      userEmail = email;
      userPassword = password;
      userFirstName = firstName;
      userLastName = lastName;
      this.displayName = anonymize();
      return this;
    },

    reanonymize: function (password) {
      if (isValidPassword(password)) {
        this.displayName = anonymize();
        return true;
      } else {
        return "Invalid Password";
      }
    },

    resetPassword: function (currentPassword, newPassword) {
      if (isValidPassword(currentPassword)) {
        userPassword = newPassword;
        return true;
      } else {
        return "Invalid Password";
      }
    },

    firstName: function (password) {
      if (isValidPassword(password)) {
        return userFirstName;
      } else {
        return "Invalid Password";
      }
    },

    lastName: function (password) {
      if (isValidPassword(password)) {
        return userLastName;
      } else {
        return "Invalid Password";
      }
    },

    email: function (password) {
      if (isValidPassword(password)) {
        return userEmail;
      } else {
        return "Invalid Password";
      }
    },
  };
})();
