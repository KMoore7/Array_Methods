// To delete an element from an array we should use splice and not delete
let arraySplice = ["Karla", "Kammie", "Me"];

arraySplice.splice(1, 1) //this is asking splice to go to index 1, which is Kammie, and delete 1 element. arraySplice should now be ["Karla", "Me"]; 
                         //and arraySplice.length should return the value 2 and not 3
