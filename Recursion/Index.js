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

// factorial of a number
function fact(n) {
  if (n == 0) {
    return 1;
  }
  return n * fact(n - 1);
}

console.log(fact(8));

// Sum of Array
function sum(arr, n) {
  if (n <= 0) {
    return 0;
  }
  return sum(arr, n - 1) + arr[n - 1];
}

console.log(sum([1, 2, 3, 4, 5], 5));

// Fibonacci numbers
function fib(n) {
  if (n <= 1) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(5));

// Sum of digits of a number
function sumOfDigits(n) {
  if (n <= 0) {
    return 0;
  }
  return (n % 10) + sumOfDigits(Math.floor(n / 10));
}

console.log(sumOfDigits(1234));
