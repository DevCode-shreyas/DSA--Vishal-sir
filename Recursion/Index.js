// Recursion - a function that calls itself until it doesn't (base case)

// print fun n times
// function fun(n) {
//   if (n == 0) {
//     return;
//   }
//   console.log("fun");
//   fun(n - 1);
// }

// fun(5);

// function multiply(arr) {
//   console.log(arr);
//   if (arr.length <= 0) {
//     return 1;
//   } else return arr[arr.length - 1] * multiply(arr.slice(0, arr.length - 1));
// }
// console.log(multiply([1, 2, 3, 4]));

// factorial of a number  n! = n * (n-1)! 5! = 5 * 4 * 3 * 2 * 1
function fact(n) {
  console.log(n);
  if (n == 0) {
    return 1;
  } else return n * fact(n - 1);
}

// console.log(fact(5));

// Sum of Array
// function sum(arr, n) {
//   if (n <= 0) {
//     return 0;
//   }
//   return sum(arr, n - 1) + arr[n - 1];
// }

// console.log(sum([1, 2, 3, 4, 5], 5));

// Fibonacci numbers
function fib(n) {
  console.log(n);
  if (n <= 1) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

// console.log(fib(5));

// Sum of digits of a number
// function sumOfDigits(n) {
//   if (n <= 0) {
//     return 0;
//   }
//   return (n % 10) + sumOfDigits(Math.floor(n / 10));
// }

// console.log(sumOfDigits(1234));

// Range of numbers
function rangeOfNumbers(startNum, endNum) {
  console.log(startNum, endNum);
  if (endNum < startNum) {
    return [];
  } else {
    const numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}

// console.log(rangeOfNumbers(0, 5));

// Palindrome
function palindrome(str) {
  if (str.length <= 1) {
    return true;
  }
  if (str[0] == str[str.length - 1]) {
    return palindrome(str.slice(1, str.length - 1));
  }
  return false;
}

// console.log(palindrome("racecar"));

// Reverse a string
function reverseString(str) {
  // if (str.length <= 1) {
  //   return str;
  // }
  // return reverseString(str.slice(1)) + str[0];

  if (str === "") {
    return "";
  } else return reverseString(str.substr(1)) + str.charAt(0);
}

// console.log(reverseString("hello"));

// Subsets of a string

function subsets(str) {
  if (str.length <= 0) {
    return [""];
  }
  const subsetsOfRest = subsets(str.slice(1));
  const subsetsOfFirst = subsetsOfRest.map((item) => str[0] + item);
  return [...subsetsOfFirst, ...subsetsOfRest];
}

console.log(subsets("123"));

// Permutations of a string

function permutations(str) {
  if (str.length <= 1) {
    return [str];
  }
  const permutationsOfRest = permutations(str.slice(1));
  const firstChar = str[0];
  const permutationsOfAll = [];
  permutationsOfRest.forEach((item) => {
    for (let i = 0; i <= item.length; i++) {
      permutationsOfAll.push(
        item.slice(0, i) + firstChar + item.slice(i, item.length)
      );
    }
  });
  return permutationsOfAll;
}

console.log(permutations("123"));
