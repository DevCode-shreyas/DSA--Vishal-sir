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

// console.log(bubbleSort([3, 5, 1, 2, 4])); // [1, 2, 3, 4, 5]

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

// console.log(selectionSort([3, 5, 1, 2, 4])); // [1, 2, 3, 4, 5]

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

// console.log(insertionSort([3, 5, 1, 2, 4])); // [1, 2, 3, 4, 5]

// Best time complexity: O(n)
// worst time complexity : O(n^2)
// Average time complexity : O(n^2)
// space complexity : O(1)

// sort method in javascript

const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Papaya"];

// console.log(fruits.sort());t

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

// console.log(sortArr(arr));

// 2. Write a program to sort an array of strings in ascending or descending order.

// Examples:
// Input: ["a", "c", "b", "d"]
// Output: ["a", "b", "c", "d"]

const strArr = ["a", "c", "b", "d"];

const sortStrArr = (arr) => {
  return arr.sort();
};

// console.log(sortStrArr(strArr)); // ["a", "b", "c", "d"]

// leetcode 912. Sort an Array

// Given an array of integers nums, sort the array in ascending order.

// Example 1:

// Input: nums = [5,2,3,1]
// Output: [1,2,3,5]

const sortArr1 = (arr) => {
  return arr.sort((a, b) => {
    return a - b;
  });
};

// console.log(sortArr1([5, 2, 3, 1])); // [1, 2, 3, 5]

// leetcode 1470. Shuffle the Array

// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

// Return the array in the form [x1,y1,x2,y2,...,xn,yn].

const shuffle = (nums, n) => {
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push(nums[i], nums[i + n]);
  }
  return result;
};

// console.log(shuffle([2, 5, 1, 3, 4, 7], 3)); // [2, 3, 5, 4, 1, 7]

// Merge Sort

// const mergeSort = (arr) => {
//   if (arr.length < 2) {
//     return arr;
//   }

//   let mid = Math.floor(arr.length / 2);
//   let left = mergeSort(arr.slice(0, mid));
//   let right = mergeSort(arr.slice(mid));
//   return merge(left, right);
// };

// const merge = (left, right) => {
//   const result = [];
//   let leftIndex = 0,
//     rightIndex = 0;

//   while (leftIndex < left.length && rightIndex < right.length) {
//     if (left[leftIndex] < right[rightIndex]) {
//       result.push(left[leftIndex++]);
//     } else result.push(right[rightIndex++]);
//   }

//   while (leftIndex < left.length) {
//     result.push(left[leftIndex++]);
//   }
//   while (rightIndex < right.length) {
//     result.push(right[rightIndex++]);
//   }
//   return result;
// };

// console.log(mergeSort([3, 5, 1, 2, 4])); // [1, 2, 3, 4, 5]

function mergSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);

  let left = mergSort(arr.slice(0, mid));
  let right = mergSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let sortedArr = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }
  return [...sortedArr, ...left, ...right];
}

console.log(mergSort([3, 5, 1, 2, 4])); // [1, 2, 3, 4, 5]

// time complexity : O(logn)
// space complexity : O(n)

// question on merge sort

// 1. Write a program to sort an array of numbers in ascending or descending order using merge sort.

// Examples:
// Input: [3, 5, 1, 2, 4]
// Output: [1, 2, 3, 4, 5]

const mergeSort1 = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort1(arr.slice(0, mid));
  let right = mergeSort1(arr.slice(mid));
  return merge1(left, right);
};

const merge1 = (left, right) => {
  const result = [];
  let leftIndex = 0,
    rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex++]);
    } else result.push(right[rightIndex++]);
  }

  while (leftIndex < left.length) {
    result.push(left[leftIndex++]);
  }
  while (rightIndex < right.length) {
    result.push(right[rightIndex++]);
  }
  return result;
};

console.log(mergeSort1([3, 5, 1, 2, 4])); // [1, 2, 3, 4, 5]

// 2. Write a program to sort an array of strings in ascending or descending order using merge sort.

// Examples:
// Input: ["a", "c", "b", "d"]
// Output: ["a", "b", "c", "d"]

const mergeSort2 = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort2(arr.slice(0, mid));
  let right = mergeSort2(arr.slice(mid));
  return merge2(left, right);
};

const merge2 = (left, right) => {
  const result = [];
  let leftIndex = 0,
    rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex++]);
    } else result.push(right[rightIndex++]);
  }

  while (leftIndex < left.length) {
    result.push(left[leftIndex++]);
  }
  while (rightIndex < right.length) {
    result.push(right[rightIndex++]);
  }
  return result;
};

console.log(mergeSort2(["a", "c", "b", "d"])); // ["a", "b", "c", "d"]
