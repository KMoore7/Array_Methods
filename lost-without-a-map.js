// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

//     assert.deepEqual(maps([1, 2, 3]), [2, 4, 6]);
//     assert.deepEqual(maps([4, 1, 1, 1, 4]), [8, 2, 2, 2, 8]); 
//     assert.deepEqual(maps([2, 2, 2, 2, 2, 2]), [4, 4, 4, 4, 4, 4]);


function maps(x){   //declare function named map with one parameter, x
    return x.map(el => el * 2); //return x.map (take our array x and use the map method to reutrn a new array) where each element is mapped through and multipled by 2 as a new array


}
