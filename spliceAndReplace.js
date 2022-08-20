//This is an example of how to delete an element from an array and replace it with another element

let spliceAndReplace = ["Karla", "Kammie", "Me"];

let removed = spliceAndReplace.splice(0,2); //spliceAndReplace should now be ["Me"];

let add = spliceAndReplace.splice(2, 0, "Karla", "Kammie") //This version of the code removes the first two elements and then replaces them with two new elements.
