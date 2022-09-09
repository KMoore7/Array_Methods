//The Array.filter() method returns a new array with all of the elements that pass the test of the function. For example:

const personsAge = [10, 24, 18, 5, 33, 65, 83];
const result = personsAge.filter(checkAdult);

function checkAdult(age) {
    return age >=18;    
}

//This should return a new array of result = [18, 33, 65, 83]
