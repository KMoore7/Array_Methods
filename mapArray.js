//Take one array and convert it into another array
//map will return only the items you want in the new array



const items = [
    {name: 'Bike',        price:100 },
    {name: 'TV',          price:200 },
    {name: 'Album',       price:10 },
    {name: 'Book',        price:5 },
    {name: 'Phone',       price:500 },
    {name: 'Computer',    price:1000 },
    {name: 'Keyboard',    price:25 }
    ]

    const itemNames = items.map((item) => {
        return item.name
    })
console.log(itemNames)
