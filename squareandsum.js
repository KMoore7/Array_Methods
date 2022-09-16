// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
// Parementer: numbers
// Return: sum of the squared numbers
//Example: above
//Psuedocode: take in an array of numbers, use forEach method to loop through each number of the array, raise each number to the 2nd power, add each squared number after each iteration, return the result 


function squareSum(numbers) {
    let sum = 0
    numbers.forEach( number => {
        sum += (number * number)
    })
    return sum
}
