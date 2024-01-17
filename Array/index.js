// Array

const arr = [1, 2, 3, 4, "Hello", { name: "shreyas" }, [1, 2, 3], 4];
const arr1 = new Array();

//TODO: how to access the first and last element of an array

// const firstElement = arr[0]; // 1
// const arrLength = arr.length; // 8
// const lastElement = arr[arrLength - 1]; // 4
// console.log(firstElement, arrLength, lastElement); // 1 8 4

//TODO: remove the last element from an array

// const lastEL = arr.pop();
// console.log(arr, lastEL);

//TODO: ADD the element at the end of an array

// arr.push("shreyas");
// console.log(arr);

//TODO: add the element at the start of an array

// arr.unshift("shreyas");
// console.log(arr);

//TODO: remove the element from the start of an array

// arr.shift();
// console.log(arr);

//TODO: loop through an array

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// arr.forEach((element, i) => {
//   console.log(arr[i]);
// });

// for (const x of arr) {
//   console.log(x);
// }

// TODO:  question 1: how do yuo check if an element exists in an array?

// const findElement = (arr, target) => {
//   for (const x of arr) {
//     if (x === target) {
//       return true;
//     }
//   }
//   return false;
// };

// console.log(findElement(arr, 4));
// console.log(findElement(arr, "Hello"));
// console.log(arr.includes(4));

// TODO: question 2: how do you cheack if an element exists in an array?

// const findElementIndex = (arr, target) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === target) {
//       return i;
//     }
//   }
//   return -1;
// };

// console.log(findElementIndex(arr, "Hello"));
// console.log(arr.indexOf("Hello"));

// TODO: question 3: how to delete add and update an element from specific index?

// const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr);
// arr.splice(1, 3); // start index, number of elements to be deleted
// console.log(arr);

// arr.splice(1, 0, 21, 31, 41, 51, 61); // start index, number of elements to be deleted, elements to be added
// console.log(arr);

// arr.splice(1, 3, 6, 7, 8); // start index, number of elements to be deleted, elements to be updated
// console.log(arr);

// TODO: splice vs slice

// const subArr = arr.slice(1, 4); // start index, end index (exclusive)
// console.log(subArr);
// console.log(arr); // original array is not modified

// TODO: Shallow copy vs deep copy

// 1st shallow copy

// const arrB = arr; // shallow copy
// arrB.splice(1, 4); // start index, number of elements to be deleted
// console.log(arrB, arr); // both arrays are modified

// 2nd deep copy

// const arrC = [...arr]; //deep copy
// const arrD = Array.from(arr); //deep copy
// const arrE = arr.concat(); //deep copy
// arrC.splice(1, 4); // start index, number of elements to be deleted
// arrD.splice(1, 4); // start index, number of elements to be deleted
// arrE.splice(1, 4); // start index, number of elements to be deleted
// console.log(arrC, arrD, arrE, arr); // only arrC and arrD and arrE are modified not arr (original array)

// TODO: how to add two arrays?

// const newArr = [...arr, 2, 3, 4];
// const newArr1 = arr.concat([2, 3, 4]);
// console.log(newArr, newArr1);

// TODO: Question 4 : how can you check if two arrays are equal or not?

// const isArrayEqual = (arr1, arr2) => {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }

//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }
//   }

//   return true;
// };

// console.log(isArrayEqual([1, 2, 3], [1, 2, 3]));

// const isArrayEqual = (arr1, arr2) => {
//   return (
//     arr1.length === arr2.length &&
//     arr1.every((element, i) => arr1[i] === arr2[i])
//   );
// };

// console.log(isArrayEqual([1, 2, 3], [1, 2, 3]));

// TODO: Question 5 : how to sort an array in ascending and descending order?

// const x = [1, 4, 6, 9, -9, -5];
// x.sort();
// console.log(x);

// x.sort((a, b) => a - b); // a - b => ascending order
// console.log(x);

// x.sort((a, b) => b - a); // b - a => descending order
// console.log(x);

// TODO: Question 6 : how to reverse an array?

// x.reverse();
// console.log(x);

// map ,filter, reduce

// const newMapArr = x.map((element, i) => element * element); // it returns a new array
// console.log(newMapArr);

// const positiveNumbers = x.filter((element, i) => element > 0); // it returns a new array
// console.log(positiveNumbers);

// const sumArr = positiveNumbers.reduce((acc, element, i) => acc + element); // it returns a new array
// console.log(sumArr);

// flat

// const y = [1, 2, 3, [4, 5, 6, [7, 8, 9, [10, 11, 12]]]];
// flatArray = y.flat(3);
// console.log(flatArray);

// filter vs find

// const positiveNumber = x.find((element, i) => element > 0);
// console.log(positiveNumber);

// const positiveNumbers = x.filter((element, i) => element > 0);
// console.log(positiveNumbers);

// TODO: Question 7 : how to find the maximum and minimum element in an array?

const x = [1, 4, 6, 9, -9, -5];
console.log(Math.max(...x));
console.log(Math.min(...x));

// TODO: Question 8 : how to find the sum of an array?

const sum = x.reduce((acc, element, i) => acc + element);
console.log(sum);

// TODO: Question 9 : how to find the average of an array?

const average = x.reduce((acc, element, i) => acc + element) / x.length;
console.log(average);

// TODO: Question 10 : how to remove duplicate elements from an array?

// const removeDuplicate = (arr) => {
//   const newArr = [];
//   for (const x of arr) {
//     if (!newArr.includes(x)) {
//       newArr.push(x);
//     }
//   }
//   return newArr;
// };

// console.log(removeDuplicate([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]));
