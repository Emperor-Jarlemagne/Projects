/*
const arr = [12, 75, 90, 33]
let len = arr.length

for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            let temp = arr[j]
            arr[j] = arr[j + 1]
            arr[j + 1] = temp
        }
    }
}
console.log(arr) 

const arr = [12, 7745, 900, 233, 55, 7]
arr.sort((a, b) => b - a)
console.log(arr) 

const lastIndex = arr.length -1
console.log(arr[lastIndex])

function Book(title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages
    this.info = function() {
        console.log(`${title} by ${author}, ${pages}`)
    }
}
const theHobbit = new Book("The Hobbit", "JRR Tolkein", 975) 
    return theHobbit.info()


function Student() {
}
Student.prototype.sayName = function() {
    console.log(this.name)
}

function EighthGrader(name, grade) {
    this.name = name
    this.grade = 8
}

EighthGrader.prototype = Object.create(Student.prototype)

const carl = new EighthGrader("carl")
carl.sayName()
carl.grade  */

function Hero(name, level) {
    this.name = name
    this.level = level
    this.info = function() {
        console.log(`${name} is at Level: ${level}`)
    }
}

let hero1 = new Hero('Earl', 2)
hero1.info()