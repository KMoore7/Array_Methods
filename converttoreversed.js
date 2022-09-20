// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]
//Paramters: number
//Return: digits in reverse order for non negative numbers
//Example: see above
//Psuedo Code: create function digitize that takes in a non-negative number n, use the map method to create a new array where the non zero elements are returned in reverse

function digitize(n) {
    return ("" + n).split("").map(el => el * 1).reverse()
}
