//The array indexOf() returns the first index at which a given element can be found in the array or -1 if it is not present.

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison')) //should return 1 because bison begins at index of 1

console.log(beasts.indexOf('bison', 2))  //the second parameter tells the method to start at the second index to begin counting. This should return 4

console.log(beasts.indexOf('giraffe')); //-1 because giraffe is not in the index
