// Function.call & Function.apply example

function logNum() {
    console.log(this.num);
  }
  
  let obj = {
    num: 42,
  };
  
  logNum.call(obj); // logs 42
  
  // Function.bind example
  
  function addIt(num1) {
    return this.num + num1;
  }
  
  let myObj = {
    num: 22,
  };
  
  let addMe = addIt.bind(myObj);
  
  addMe(56); // => 78