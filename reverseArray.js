// javascript reverse an array without using reverse()

// function reverse(array){
//     let output = [];
//     for (var i = 0; i<= array.length; i++){
//         output.push(array.pop());
//     }

//     return output;
// }

// console.log(reverse([1,2,3,4,5,6,7]));

function reverse(array){  //create a function named reverse with one parameter named array
    let output = []; // declare a new variable output equal to an empty array
    for (let i = array.length - 1; i> -1; i--){ //for loop that iterates through the array in REVERSE ORDER
        output.push(array[i]); // use push to return the reversed array to the variable output
    }

    return output; //return the reversed array. can also console or alert to the screen.
}
