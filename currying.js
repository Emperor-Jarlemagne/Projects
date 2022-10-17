
/*
let dragon = (name, size, element) => {
    name + ' is a ' + 
    size + ' dragon that breathes ' +
    element + '!'
}
*/

console.log(dragon('smaug', 'medium', 'fire'))

// the same function curried

let dragon =
    name => 
        size => 
            element => 
                name + ' is a '
                size + ' dragon that breathes ' +
                element + '!'