// string in javascript

let firstName = "shreyas";

// length of string

console.log(firstName.length); // 7

console.log(firstName.charAt(0)); // s

console.log(firstName.charCodeAt(0)); // 115 (ASCII value of s)

console.log(firstName.includes("s")); // true

console.log(firstName.indexOf("y")); // 4

console.log(firstName.lastIndexOf("s")); // 6

// compare two strings
let anotherName = "shreyas";
console.log(firstName.localeCompare(anotherName)); // 0 (if both are same) else -1 or 1 (if not same)

// replace shreyas with atul
const str = "shreyas is best frontend developer";
console.log(str.replace("shreyas", "atul")); // atul is best frontend developer

console.log(str.substring(6, 20)); // is best frontend

console.log(str.slice(6, 20)); //  is best frontend & here we can use negative values also

console.log(str.split(" ")); // ["shreyas", "is", "best", "frontend", "developer"]

console.log(str.startsWith("shreyas")); // true

console.log(str.trim()); // shreyas is best frontend developer & remove extra spaces from start and end

console.log(str.toUpperCase()); // SHREYAS IS BEST FRONTEND DEVELOPER

console.log(str.toLocaleUpperCase()); // SHREYAS IS BEST FRONTEND DEVELOPER

// convert string to number
let num = 123;
console.log(num.toString()); // "123"

// conver onject to string
let obj = {
  name: "shreyas",
  age: 21,
};

console.log(obj, JSON.stringify(obj)); // {name: "shreyas", age: 21} "{"name":"shreyas","age":21}"

// concat two strings
const lastName = "bole";
console.log(firstName.concat(" ", lastName)); // shreyas bole

//TODO: question-1 : find the index of first occurence in string

var strStr = function (haystack, needle) {
  if (needle === "") return 0;
  if (haystack.includes(needle)) {
    return haystack.indexOf(needle);
  } else {
    return -1;
  }
};

//TODO: question-2 : reverse a string

var reverseString = function (s) {
  let start = 0;
  let end = s.length - 1;
  while (start < end) {
    let temp = s[start];
    s[start] = s[end];
    s[end] = temp;
    start++;
    end--;
  }
  return s;
};

//TODO: question-3 : valid Anaagram

function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  let s1 = s.split("").sort().join("");
  let t1 = t.split("").sort().join("");
  return s1 === t1;
}

//TODO: question-4 : Longest Common Prefix

var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
    }
  }
  return prefix;
};

//TODO: question-5 : Merge Strings Alternately

var mergeAlternately = function (word1, word2) {
  let result = "";
  let i = 0;
  while (i < word1.length || i < word2.length) {
    if (i < word1.length) result += word1[i];
    if (i < word2.length) result += word2[i];
    i++;
  }
  return result;
};

//TODO: question-6 : Length of Last Word
var lengthOfLastWord = function (s) {
  let trimmedString = s.trim();
  return trimmedString.length - trimmedString.lastIndexOf(" ") - 1;
};

//TODO: Valid Palidrome

var isPalindrome = function (s) {
  s = s.replace(/[^a-z0-9]/gi, "").toLowerCase();

  // If string is just with one character then return true
  if (s.length < 2) return true;

  // Assignment of the variables
  let i = 0;
  let count = s.length - 1;

  // Loop till (max), half of the total length of the string
  while (i < count + 1 / 2) {
    // If value is not a match the return false as it's not valid string
    if (s[i] != s[count - i]) {
      return false;
    }
    i++;
  }
  return true;
};

// TODO: question-7 : Reverse Words in a String III

var reverseWords = function (s) {
  let arr = s.split(" ");
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let word = arr[i];
    let reversedWord = reverseWord(word);
    result.push(reversedWord);
  }
  return result.join(" ");
};

function reverseWord(word) {
  let reversedWord = "";
  for (let i = word.length - 1; i >= 0; i--) {
    reversedWord += word[i];
  }
  return reversedWord;
}

