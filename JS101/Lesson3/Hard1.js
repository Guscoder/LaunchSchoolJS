// Q1 Will the following functions return the same results?

function first() {
  return {
    prop1: 'hi there',
  };
}

function second() {
  return;
  {
    prop1: 'hi there';
  }
}

console.log(first());
console.log(second());

// No, the first returns the object, the second returns undefined. JS inserts semicolons where it thinks they should be. It doesnts throw an error because th rest of the code is valid also. '

// Q2 What does the last line in the following code output?

let object = { first: [1] };
let numArray = object['first'];
numArray.push(2);

console.log(numArray); //  => "[1, 2]"
console.log(object);

// Since numArray is a reference to the original array, [1], numArray.push(2) modifies this array. Thus, the original object referenced by object is changed.
// Can use .slice or .concat to create a copy of the array instead of referencing the original


// Q3 Given the following similar sets of code, what will each code snippet print?

function messWithVars(one, two, three) {
    one = two;
    two = three;
    three = one;
  }
  
  let one = ["one"];
  let two = ["two"];
  let three = ["three"];
  
  messWithVars(one, two, three);
  
  console.log(`one is: ${one}`);
  console.log(`two is: ${two}`);
  console.log(`three is: ${three}`);

//  ["one"];["two"];["three"];

  function messWithVars(one, two, three) {
    one = ["two"];
    two = ["three"];
    three = ["one"];
  }
  
  let one = ["one"];
  let two = ["two"];
  let three = ["three"];
  
  messWithVars(one, two, three);
  
  console.log(`one is: ${one}`);
  console.log(`two is: ${two}`);
  console.log(`three is: ${three}`);


  // 

  function messWithVars(one, two, three) {
    one.splice(0, 1, "two");
    two.splice(0, 1, "three");
    three.splice(0, 1, "one");
  }
  
  let one = ["one"];
  let two = ["two"];
  let three = ["three"];
  
  messWithVars(one, two, three);
  
  console.log(`one is: ${one}`);
  console.log(`two is: ${two}`);
  console.log(`three is: ${three}`);

  //one is: two
//two is: three
//three is: one

  // In all three examples, we have three global variables one, two and three and three local variables (local to the function messWithVars) one, two and three. Since parameters of a function have the same name as the global variables, they "shadow" them, so global variables are not accessible inside of the function. That is why local variable one and global variable one here are not the same variables, even though they have the same name.

  A function messWithVars(one, two, three) {
    // here on line 2 both local variable one and global variable one reference to the same array object. Same goes for variables two and three
   one = two; // this is reassignment, from now on local variable one is pointing to the object that local variable two was pointing t two  (at the moment one and two point to the same object). Note that global variable one still points to the same object `["one"]` as we didn't change anywhere what it references
   two = three; // as this is also reassignment, local variable two is now pointing to the same object as variable three and now local variables two and three point to the same object. Note that global variable two still points to the same object `["two"]` as we didn't change anywhere what it references
   three = two; // again, reassignment, local variable three points to the same object as local variable one, which is `["two"]` (we reassigned it up above) . And, global variable three wasn't changed so it still points to the same object.
  }

  B function messWithVars(one, two, three) {
    // here on line 2 both local variable one and global variable one reference to the same array object. Same goes for variables two and three
    one = ["two"]; // we are reassigning local variable one to point to a completely new array object with the value ["two"]. This is not the same object that variable two is pointing to. Again, we are reassigning local variable one, so global variable one remains unchanged.
  // ... same thing happens in other 2 lines of code
  }

  C function messWithVars(one, two, three) {
    // as before, here both local variables one and global variable one point to the same object. Same goes for other variables.
    one.splice(0, 1, "two"); // we are calling mutating method `splice` on the object that local variable one is pointing to. We are mutating this object and since global variable one is pointing to the same object it is mutated as well.
    two.splice(0, 1, "three"); // same thing here, we are calling mutating method `splice` on the object that local variable two is pointing to. We are mutating this object and since global variable two is pointing to the same object it is mutated as well.
    three.splice(0, 1, "one"); // same as above
  }

  // Q4 determine whether an input string is an IP address using 4 dot-separated numbers, e.g., 10.4.5.11
  
  function isDotSeparatedIpAddress(inputString) {
    let dotSeparatedWords = inputString.split(".");
    if (dotSeparatedWords.length > 4 || dotSeparatedWords < 4){
        return false;
    } 
    
    while (dotSeparatedWords.length > 0) {
      let word = dotSeparatedWords.pop();
      if (!isAnIpNumber(word)) {
        break;
      }
    }
  
    return true;
  }