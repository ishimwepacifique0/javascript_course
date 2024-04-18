const obj = {
    name: 'ISHIMWE',
    age: 23,
    city: 'Pacifique',
    country: 'Nigeria'
}
// step 1 : for accessing object properties
console.log(obj.city)

// step 2 : for accessing
console.log(obj['city'])


// combine array with object 
// array object

const cars = [
    {
        name: 'BMW',
        price: 1000000
    },
    {
        name: 'Mercedes',
        price: 2000000
    },
    {
        name: 'Audi',
        price: 3000000
    },
    {
        name: 'Toyota',
        price: 4000000
    },
    {
        name: 'Honda',
        price: 5000000
    },
    {
        name: 'Volvo',
        price: 6000000
    },
    {
        name: 'Fiat',
        price: 7000000
    },
    {
        name: 'Honda',
        price: 8000000
    },
]

console.log(cars[0].price)