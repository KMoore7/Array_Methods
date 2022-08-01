//for every is similar to for some except that for every checks if every single item meets the criteria to make the whole array true rathr than 1

const items = [
    {name: 'Bike',        price:100 },
    {name: 'TV',          price:200 },
    {name: 'Album',       price:10 },
    {name: 'Book',        price:5 },
    {name: 'Phone',       price:500 },
    {name: 'Computer',    price:1000 },
    {name: 'Keyboard',    price:25 }
    ]

    const hasInexpensiveItems = items.every((item) => {
        return item.price <= 1000
    })
    console.log(hasInexpensiveItems)

