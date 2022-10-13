
var animals = [
    {name: 'Bunbun', species: 'Rabbit'},
    {name: 'Spot', species: 'Dog'},
    {name: 'Fluffy', species: 'Cat'},
    {name: 'Flipper', species: 'Fish'},
    {name: 'Koira', species: 'Dog'},
    {name: 'Kala', species: 'Fish'}
]

//AND when using arrow functions the same code can be written as thus:
var names = animals.map((x) => x.name)

//Using Map to gte all the names of the animals in the array
//In this case the callback function is expected to return the transformed value of the object in the array
var names = animals.map(function(animal){
    return animal.name
})
 console.log(names)

 /* Using a "FOR" loop to just get the names of all the animals in the array
var names = []
 for (var  i = 0; i<animals.length; i++) {
    names.push(animals[i].name)
 }
 */