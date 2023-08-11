# Practice Questions

### 1. Two Sum

[Leetcode](https://leetcode.com/problems/two-sum/description/)

```
var twoSum = function (nums, target) {
 let map = new Map();
 for (let i = 0; i < nums.length; i++) {
   let diff = target - nums[i];

   if (map.has(diff)) {
     return [map.get(diff), i];
   }
   map.set(nums[i], i);
 }
};
```

---

### 2. Majority Element

[Leetcode](https://leetcode.com/problems/majority-element/description/)

```
var majorityElement = function (nums) {
  let freq = {};
  let max = 0;
  for (i = 0; i < nums.length; i++) {
    if (freq[nums[i]] === undefined) {
      freq[nums[i]] = 1;
    } else {
      freq[nums[i]] += 1;
    }
    if (freq[nums[i]] > nums.length / 2) {
      return nums[i];
    }
  }
};
```

---
