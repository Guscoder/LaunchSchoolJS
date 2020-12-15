// Search obj & its prototypes for a property & add value

function assignProperty(obj, property, value) {
    while (obj !== null) {
      if (obj.hasOwnProperty(property)) {
        obj[property] = value;
        break;
      }
  
      obj = Object.getPrototypeOf(obj);
    }
  }


// create my own instanceOf function:

function isInstanceOf(obj, constructorFunction) {
    while (obj) {
      obj = Object.getPrototypeOf(obj);
      if (obj === constructorFunction.prototype) return true;
    }
  
    return false;
  }


// Constructor function to use with or without "new": scope-safe constructors
function User(first, last) {
    if (!(this instanceof User)) {
      return new User(first, last);
    }
  
    this.name = first + ' ' + last;
  }
  
  let name = 'Jane Doe';
  let user1 = new User('John', 'Doe');
  let user2 = User('John', 'Doe');
  
  console.log(name); // => Jane Doe
  console.log(user1.name); // => John Doe
  console.log(user2.name); // => John Doe

  

// Ancestor prototypes function

Object.prototype.ancestors = function ancestors() {
    let ancestor = Object.getPrototypeOf(this);
  
    if (Object.prototype.hasOwnProperty.call(ancestor, 'name')) {
      return [ancestor.name].concat(ancestor.ancestors());
    }
  
    return ['Object.prototype'];
  };

