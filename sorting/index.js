// sorting in javascript

// Sort an array

const arr = [3, 5, 1, 2, 4];
// console.log(
//   arr.sort((a, b) => {
//     return b - a;
//   })
// );

const strArr = ["a", "c", "b", "d"];
// console.log(strArr.sort()); // ["a", "b", "c", "d"]

// sort a string

const str = "hello";
// console.log(str.split("").sort().join("")); // ehllo

// bubble sort

const bubbleSort = (arr) => {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;

        swapped = true;

        // another way

        // [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    }
  } while (swapped);
  return arr;
};

console.log(bubbleSort([3, 5, 1, 2, 4])); // [1, 2, 3, 4, 5]

// selection sort

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {}
  }
};
