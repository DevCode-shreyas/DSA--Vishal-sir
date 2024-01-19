const person = {
  name: "shreyas", // key: value
  age: 21,
  isStudent: true,
  skills: ["js", "react", "node"],
  projects: {
    diceGame: "two player dice game using js",
  },
  code: function () {
    return "coding...";
  },
};

// how to access object properties
console.log(person.name);

// [] notation
console.log(person["name"]);

// how to access object methods
console.log(person.code());

// how to add , update and delete keys in object
console.log(person.hasOwnProperty("name")); // true

// add
person.name = "shreyasBole";
console.log(person.name);

// update
person.age = 22;
console.log(person.age);

// delete
// delete person.isStudent;

// console.log(person);

// shallow copy and deep copy of object
const person2 = person;
// console.log(person2);

person2.isStudent = false;
// console.log(person2);
// console.log(person);

// deep copy
const person3 = Object.assign({}, person);
person3.skills = null;
// console.log(person3);
// console.log(person);

// object methods
// diff between freeze and seal

// Object.freeze(person); // can't add, update and delete
// console.log(person);
// person.name = "shreyasb";
// console.log(person);

// Object.seal(person); // can't add and delete but can update
person.name = "shreyas Bole";
console.log(person);

//keys , values and entries
console.log(Object.keys(person)); // array of keys of object
console.log(Object.values(person)); // array of values of keys
console.log(Object.entries(person)); // array of arrays of key value pairs

// looping through object
for (let key in person) {
  //   console.log(key);
  //   console.log(person[key]);
}

Object.keys(person).forEach((key) => {
  console.log(key);
  // console.log(person[key]);
});

// person1 and person2 there values are equal or not
console.log(Object.is(person, person2));

// concept of prototype and inheritance

// q1 : fine the all player count

const data = {
  id: 1,
  name: ["P1", "P4"],
  next: {
    id: 2,
    name: ["P3"],
    next: {
      id: 3,
      name: ["P3", "P4", "P5"],
      next: {
        id: 4,
        name: ["P1", "P2", "P4"],
        next: {
          id: 5,
          name: ["P2", "P3", "P5"],
          next: null,
        },
      },
    },
  },
};

const playerCount = (data) => {
  if (data === null) {
    return 0;
  }

  let countPlayer = {};
  for (let player of data.name) {
    countPlayer[player] = (countPlayer[player] || 0) + 1;
  }
  const nextPlayerCount = playerCount(data.next);

  for (const key in nextPlayerCount) {
    countPlayer[key] = (countPlayer[key] || 0) + nextPlayerCount[key];
  }
  return countPlayer;
};

const countPlayer = playerCount(data);
console.log(countPlayer);

// 1512. Number of Good Pairs
// https://leetcode.com/problems/number-of-good-pairs/

var numIdenticalPairs = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] == nums[j]) {
        count++;
      }
    }
  }
  return count;
};

// 1342. Number of Steps to Reduce a Number to Zero
// https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/

var numberOfSteps = function (num) {
  let count = 0;
  while (num > 0) {
    if (num % 2 == 0) {
      num = num / 2;
    } else {
      num = num - 1;
    }
    count++;
  }
  return count;
};

// 1365. How Many Numbers Are Smaller Than the Current Number
// https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/

var smallerNumbersThanCurrent = function (nums) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] < nums[i]) {
        count++;
      }
    }
    result.push(count);
  }
  return result;
};

// 1431. Kids With the Greatest Number of Candies
// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/

var kidsWithCandies = function (candies, extraCandies) {
  let result = [];
  let max = Math.max(...candies);
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= max) {
      result.push(true);
    } else {
      result.push(false);
    }
  }
  return result;
};

// 1470. Shuffle the Array
// https://leetcode.com/problems/shuffle-the-array/

var shuffle = function (nums, n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push(nums[i]);
    result.push(nums[i + n]);
  }
  return result;
};

// 1480. Running Sum of 1d Array
// https://leetcode.com/problems/running-sum-of-1d-array/

var runningSum = function (nums) {
  let result = [];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
    result.push(sum);
  }
  return result;
};

// 1108. Defanging an IP Address
// https://leetcode.com/problems/defanging-an-ip-address/

var defangIPaddr = function (address) {
  let result = "";
  for (let i = 0; i < address.length; i++) {
    if (address[i] == ".") {
      result = result + "[.]";
    } else {
      result = result + address[i];
    }
  }
  return result;
};

// 771. Jewels and Stones

var numJewelsInStones = function (jewels, stones) {
  let count = 0;
  for (let i = 0; i < stones.length; i++) {
    if (jewels.includes(stones[i])) {
      count++;
    }
  }
  return count;
};
