// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

//Paramters = two word string
//Return = string with two capital letters separated by a period
//Example = see above
//Psuedo code: function abbrevName take in a string made up of first name and last name. split the string then create a new string with map, return a substring, convert it to upper case and join it back together 
//separated by a dot

function abbrevName(name){
    return name.split(" ").map(el => el.substring(0,1).toUpperCase()).join(".")
}
