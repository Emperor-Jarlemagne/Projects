
//Below is BUBBLE sort
let arr = [10, 5, 50, 9, 0];
let len = arr.length;

for (let i = 0; i < len; i++) {
  for (let j = 0; j < len - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}
console.log(arr);

//Below is SELECTION sort
let arr = [10, 5, 50, 9, 0];
let len = arr.length;

for (let i = 0; i < len - 1; i++) {
  let minIndex = i;

  for (let j = i + 1; j < len; j++) {
    if (arr[j] < arr[minIndex]) {
      minIndex = j;
    }
  }

  if (minIndex !== i) {
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
}

console.log(arr);

//Below is INSERTION sort
let arr = [10, 5, 50, 9, 0];
let len = arr.length;

for (let i = 1; i < len; i++) {
  let key = arr[i];
  let j = i - 1;

  while (j >= 0 && arr[j] > key) {
    arr[j + 1] = arr[j];
    j--;
  }

  arr[j + 1] = key;
}

console.log(arr);