/* 

1. This code will log 2 to the console becayse when baz is created it inherits the propeties/values that qux has. WhenJS searches for baz.foo, it has to search up teh chaine and finds it in qux.foo so adds 1 + 1.  

2. This time, baz.foo has been assigned a value of 2. When the object has the property, it takes that property first instead of looking up the chain for it. So the output is 3.

3. Here it log 4. Since bax references qux properties, when quz.foo is changed to 2, baz.foo also is equal to 2. 

4. 
*/

// 4
function searchChain(obj, property, value) {
  while (obj !== null) {
    if (obj.hasOwnProperty(property)) {
      obj[property] = value;
      break;
    }
    obj = Object.getPrototypeOf(obj);
  }
}

//5. These loops may log different results. Object.keys will ouput onlys the object's OWN properties, whereas the for/in loop will look over all inherited props also up the prototype chain

// 6. to create an object with no prototype, use Object.create(nul)
