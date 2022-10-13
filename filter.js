
var animals = [
    {name: 'Bunbun', species: 'Rabbit'},
    {name: 'Spot', species: 'Dog'},
    {name: 'Fluffy', species: 'Cat'},
    {name: 'Flipper', species: 'Fish'},
    {name: 'Koira', species: 'Dog'},
    {name: 'Kala', species: 'Fish'}
]
// This is using the "Filter" function
//In this case the callback function is expected to return "true" or "false" whether the animal should be in the new array

var dogs =  animals.filter(function(animal) {
    return animal.species === 'Dog'
})

//If I wanted to split the function and in this case remove...fish

var isFish = function(animal) {
    return animal.species === 'Fish'
}

var fish = animals.filter(isFish)
var otherAnimals = animals.reject(isFish)

/* This is the normal 'FOR' loop that would filter out all dogs in the array
var dogs = []
for (var i = 0; i < animals.length; i++) {
    if (animals[i].species ==='Dog')
        dogs.push(animals[i])
}
*/