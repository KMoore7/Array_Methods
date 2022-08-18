//The for each method doesn't actually return anything
//Very similar to a for loop but uses a function instead. 
//it will do what is in the function for every single item in the array

const items = [
    {name: 'Bike',        price:100 },
    {name: 'TV',          price:200 },
    {name: 'Album',       price:10 },
    {name: 'Book',        price:5 },
    {name: 'Phone',       price:500 },
    {name: 'Computer',    price:1000 },
    {name: 'Keyboard',    price:25 }
    ]

    items.forEach((items) => {
        console.log(items.name)
    })
