// Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

// The geese are any strings in the following array, which is pre-populated in your solution:

//   ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
// For example, if this array were passed as an argument:

//  ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
// Your function would return the following array:

// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
// The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.

function gooseFilter (birds) {   //define a function gooseFilter that takes the parameter birds that represent a mixed list of birds
    let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];  //define a new array named geese with only the geese from the list of birds
      
      // return an array containing all of the strings in the input array except those that match strings in geese
      return birds.filter(item => !geese.includes(item)) //use the .filter method and the .include method to filter out all geese from the list of birds and return a list with geese only.
    };
