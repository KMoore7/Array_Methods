// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

// Example(Input1, Input2 --> Output)
// [1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]
//Paramters = 2 arguments. Argument 1 = array of numbers Argument 2 = divisor
//Return = all numbers divisible by the divisor
//Example see above
//Psuedocode = put in an argument that is an array of numbers, put in a 2nd argument that is the divisor, return the numbers in the array that are divisible by the divisor

function divisibleBy(numbers, divisor){
    return numbers.filter(num => num % divisor === 0);
}

