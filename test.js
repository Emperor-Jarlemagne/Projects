
//Below is BUBBLE sort
let arr1 = [10, 5, 50, 9, 0];
let len1 = arr1.length;

for (let i = 0; i < len1; i++) {
  for (let j = 0; j < len1 - 1; j++) {
    if (arr1[j] > arr1[j + 1]) {
      let temp = arr1[j];
      arr1[j] = arr1[j + 1];
      arr1[j + 1] = temp;
    }
  }
}
console.log(arr1);

//Below is SELECTION sort
let arr2 = [10, 5, 50, 9, 0];
let len2 = arr2.length;

for (let i = 0; i < len2 - 1; i++) {
  let minIndex = i;

  for (let j = i + 1; j < len2; j++) {
    if (arr2[j] < arr2[minIndex]) {
      minIndex = j;
    }
  }

  if (minIndex !== i) {
    let temp = arr2[i];
    arr2[i] = arr2[minIndex];
    arr2[minIndex] = temp;
  }
}

console.log(arr2);

//Below is INSERTION sort
let arr3 = [10, 5, 50, 9, 0];
let len3 = arr3.length;

for (let i = 1; i < len3; i++) {
  let key = arr3[i];
  let j = i - 1;

  while (j >= 0 && arr3[j] > key) {
    arr3[j + 1] = arr3[j];
    j--;
  }

  arr3[j + 1] = key;
}

console.log(arr3);

var Dog = function(name) {
  this.name = name

  var barkCount = 0

  this.bark = function() {
      barkCount++
      console.log((this.name + " barks"))
  }
  this.getBarkCount = function() {
      console.log(this.name + " has barked " + barkCount + " times")
  }
}

Dog.prototype.wagTail = function() {
  console.log(this.name + " waggin tail")
}

var dog = new Dog("Herbert")
dog.bark()
dog.bark()
dog.getBarkCount()
dog.wagTail()