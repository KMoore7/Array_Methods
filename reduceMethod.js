//does operation on array. will give us the total of all items in the array to sum up everyhting
//takes two parameters
//reduce runs a function on every item in the array 
//current total will add to the total for each time the array runs
//the second item is the actual item in the array
//0 is the first time the reduce runs it adds 0 into the currentTotal, the next time it runs it goes to bike and adds 100, etc.

const items = [
    {name: 'Bike',        price: 100 },
    {name: 'TV',          price: 200 },
    {name: 'Album',       price: 10 },
    {name: 'Book',        price: 5 },
    {name: 'Phone',       price: 500 },
    {name: 'Computer',    price: 1000 },
    {name: 'Keyboard',    price: 25 }
    ]

    const total = items.reduce((currentTotal, item) => {
        return item.price + currentTotal
    }, 0)

    console.log(total)

