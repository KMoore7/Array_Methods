//Get all items in this array that are less than or equal to 100 by using the filter method
//Returns true or false for each item in the array
//If condition is true it returns the result in the new array
//If it isn't true then it does not return the result in the new array


const items = [
    {name: 'Bike',        price:100 },
    {name: 'TV',          price:200 },
    {name: 'Album',       price:10 },
    {name: 'Book',        price:5 },
    {name: 'Phone',       price:500 },
    {name: 'Computer',    price:1000 },
    {name: 'Keyboard',    price:25 }
    ]

   const filteredItems = items.filter ((item) => {
        return item.price <= 100

   }) 
console.log(filteredItems)
