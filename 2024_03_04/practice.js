/// Two Pointer
var twoSum = function (numbers, target) {
  let l = 0;
  let r = numbers.length - 1;

  while (l < r) {
    const sum = numbers[l] + numbers[r];

    if (sum > target) {
      r--;
    } else if (sum < target) {
      l++;
    } else if (sum === target) {
      break;
    } else {
      return;
    }
  }

  return [l + 1, r + 1];
};

console.log(twoSum([2, 7, 11, 15], 22));
console.log(twoSum([2, 3, 4], 6));

/// Sliding Window

var maxProfit = function (prices) {
  let total = 0;
  let l = 0;
  let r = 1;

  while (l < prices.length && r < prices.length) {
    const prev = prices[l];
    const curr = prices[r];

    if (prev < curr) {
      if (curr - prev > total) {
        total = curr - prev;
      }
    } else {
      l = r;
    }
    r++;
  }
  return total;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));

/// Sliding Window Method
var lengthOfLongestSubstring = function (str) {
  if (str.length === 1) {
    return 1;
  }

  const hash = {};
  let tempMax = 0;
  let start = 0;
  let end = 0;

  while (end < str.length) {
    const el = str[end];

    if (hash[el] >= 0) {
      start = Math.max(start, hash[el] + 1);
    }

    tempMax = Math.max(tempMax, end - start + 1);

    hash[el] = end;
    end++;
  }

  return tempMax;
};

console.log(lengthOfLongestSubstring("abba"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("abcabcdd"));

function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    // if current window doesn't add up to the given sum then
    // move the window to right
    if (total < sum && end < nums.length) {
      total += nums[end];
      end++;
    }
    // if current window adds up to at least the sum given then
    // we can shrink the window
    else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++;
    }
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
    else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19]));
console.log(minSubArrayLen([2, 1, 6, 5, 4]));
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10]));

/// Array

var productExceptSelf = function (nums) {
  const result = [];

  let prefix = 1;

  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }

  let postfix = 1;

  for (let j = nums.length - 1; j >= 0; j--) {
    result[j] *= postfix;
    postfix *= nums[j];
  }

  return result;
};

console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1, 1, 0, -3, 3]));

var longestConsecutive = function (nums) {
  nums = [...new Set(nums.sort((a, b) => a - b))];

  if (!nums.length) {
    return 0;
  }

  if (nums.length === 1) {
    return 1;
  }

  let consec = 1;
  let max = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1] + 1) {
      consec++;
    } else {
      consec = 1;
    }

    max = Math.max(max, consec);
  }

  return max;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
console.log(longestConsecutive([9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6]));

function equalizeArray(arr) {
  // Write your code here
  const countMap = new Map();
  arr.forEach((num) => {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  });

  // Find the maximum frequency
  let maxFrequency = 0;
  countMap.forEach((count) => {
    if (count > maxFrequency) {
      maxFrequency = count;
    }
  });

  // Calculate minimum deletions required
  const minDeletions = arr.length - maxFrequency;

  return minDeletions;
}

console.log(equalizeArray([3, 3, 2, 1, 3]));
console.log(equalizeArray([1, 2, 3, 1, 2, 3, 3, 3]));
