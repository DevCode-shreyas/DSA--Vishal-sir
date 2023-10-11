// // sorting in javascript

// // Sort an array

// const arr = [3, 5, 1, 2, 4];
// // console.log(
// //   arr.sort((a, b) => {
// //     return b - a;
// //   })
// // );

// const strArr = ["a", "c", "b", "d"];
// // console.log(strArr.sort()); // ["a", "b", "c", "d"]

// // sort a string

// const str = "hello";
// // console.log(str.split("").sort().join("")); // ehllo

// // bubble sort

// // const bubbleSort = (arr) => {
// //   let swapped;
// //   do {
// //     swapped = false;
// //     for (let i = 0; i < arr.length; i++) {
// //       if (arr[i] > arr[i + 1]) {
// //         let temp = arr[i];
// //         arr[i] = arr[i + 1];
// //         arr[i + 1] = temp;

// //         swapped = true;

// //         // another way

// //         // [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
// //       }
// //     }
// //   } while (swapped);
// //   return arr;
// // };

// // console.log(bubbleSort([3, 5, 1, 2, 4])); // [1, 2, 3, 4, 5]

// // selection sort

// const selectionSort = (arr) => {
//   for (let i = 0; i < arr.length - 1; i++) {
//     let minIndex = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[minIndex]) {
//         minIndex = j;
//       }
//     }
//     [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
//   }
//   return arr;
// };

// console.log(selectionSort(arr)); // -7, -2 , 5, 1000

// // insertion sort

// const insertionSort = (arr) => {
//   for (let i = 1; i < arr.length; i++) {
//     let current = arr[i];
//     let j = i - 1;
//     while (j >= 0 && arr[j] > current) {
//       arr[j + 1] = arr[j];
//       j--;
//     }
//     arr[j + 1] = current;
//   }
//   return arr;
// };

// console.log(insertionSort(arr)); // -7, -2 , 5, 1000

/* -------------------------------------------------------- */

// Bubble Sort

const bubbleSort = (arr) => {
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    for (j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};

console.log(bubbleSort([3, 5, 1, 2, 4])); // [1, 2, 3, 4, 5]

//Best time complexity: O(n)
// worst time complexity : O(n^2)
// Average time complexity : O(n^2)
// space complexity : O(1)

// Selection Sort

const selectionSort = (arr) => {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
};

console.log(selectionSort([3, 5, 1, 2, 4])); // [1, 2, 3, 4, 5]

// Best time complexity: O(n^2)
// worst time complexity : O(n^2)
// Average time complexity : O(n^2)
// space complexity : O(1)

// Insertion Sort

const insertionSort = (arr) => {
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    const key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
};

console.log(insertionSort([3, 5, 1, 2, 4])); // [1, 2, 3, 4, 5]

// Best time complexity: O(n)
// worst time complexity : O(n^2)
// Average time complexity : O(n^2)
// space complexity : O(1)

// sort method in javascript

const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Papaya"];

console.log(fruits.sort());

// question 1

// 1. Write a program to sort an array of numbers in ascending or descending order.

// Examples:
// Input: [3, 5, 1, 2, 4]
// Output: [1, 2, 3, 4, 5]

const arr = [3, 5, 1, 2, 4];

const sortArr = (arr) => {
  return arr.sort((a, b) => {
    return a - b;
  });
};

console.log(sortArr(arr));
