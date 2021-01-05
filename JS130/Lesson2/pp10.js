const Vehicle = {
  startEngine() {
    this.engineOn = true;
  },
  getGas() {
    this.gasTank = "full";
  },
  init(model, passengers, tires) {
    this.model = model;
    this.passengers = passengers;
    this.tires = tires;
    return this;
  },
};

const Account = (function () {
  let userEmail;
  let userPassword;
  let userFirstName;
  let userLastName;

  function isValidPassword(pass) {
    return userPassword === pass;
  }

  function getRandomChar() {
    let index = Math.floor(Math.random() * 37);
    let charString = "abcdefghijklmnopqrstuvwxyz1234567890";
    return charString[index];
  }

  function anonymize() {
    let name = "";
    for (let index = 0; index < 16; index++) {
      name += getRandomChar();
    }
    return name;
  }

  return {
    init(email, password, firstName, lastName) {
      userEmail = email;
      userPassword = password;
      userFirstName = firstName;
      userLastName = lastName;
      this.displayName = anonymize();
      return this;
    },
    reanonymize(password) {
      if (isValidPassword(password)) {
        this.displayName = anonymize();
        return true;
      } else {
        return "Invalid Password";
      }
    },
    resetPassword(currentPass, newPass) {
      if (isValidPassword(currentPass)) {
        userPassword === newPass;
        return true;
      } else {
        return "Invalid Password";
      }
    },
    firstName(pass) {
      return isValidPassword(pass) ? userFirstName : "Invalid Password";
    },
    lastName(pass) {
      return isValidPassword(pass) ? userLastName : "Invalid Password";
    },
    email(pass) {
      return isValidPassword(pass) ? userEmail : "Invalid Password";
    },
    displayName() {
      return this.displayName;
    },
  };
})();

let fooBar = Object.create(Account).init("foo@bar.com", "123456", "foo", "bar");
console.log(fooBar.firstName); // returns the firstName function
console.log(fooBar.email); // returns the email function
console.log(fooBar.firstName("123456")); // logs 'foo'
console.log(fooBar.firstName("abc")); // logs 'Invalid Password'
console.log(fooBar.displayName); // logs 16 character sequence
console.log(fooBar.resetPassword("123", "abc")); // logs 'Invalid Password';
console.log(fooBar.resetPassword("123456", "abc")); // logs true

let displayName = fooBar.displayName;
fooBar.reanonymize("abc"); // returns true
console.log(displayName === fooBar.displayName); // logs false
