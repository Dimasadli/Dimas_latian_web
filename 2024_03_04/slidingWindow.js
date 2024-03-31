/// Sliding Window Method

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

var characterReplacement = function (s, k) {
  const hash = {};

  let r = 0;
  let l = 0;
  let result = 0;

  while (r < s.length) {
    const str = s[r];

    /// Create hash map untuk tau jumlah char didalam ada berapa
    hash[str] = ++hash[str] || 1;

    let windowLen = r - l + 1;

    /// Find the most freq char in hash
    const freq = Math.max(...Object.values(hash));

    /// If the most minus windowlen > k
    if (windowLen - freq > k) {
      hash[s[l]]--;
      l++;
    }
    windowLen = r - l + 1;
    result = Math.max(result, windowLen);
    r++;
  }

  return result;
};

console.log(characterReplacement("AABABBA"));
console.log(characterReplacement("ABAB"));

var numSubarrayProductLessThanK = function (nums, k) {
  if (k <= 1) {
    return 0;
  }

  let count = 0;
  let product = 1;
  let l = 0;

  for (let r = 0; r < nums.length; r++) {
    product *= nums[r];
    while (product >= k) {
      product /= nums[l];
      l++;
    }
    count += r - l + 1;
  }

  return count;
};

console.log(numSubarrayProductLessThanK([10, 5, 2, 6], 100));
console.log(numSubarrayProductLessThanK([1, 2, 3], 6));

var maxSubarrayLength = function (nums, k) {
  const hash = {};

  let r = 0;
  let l = 0;
  let len = 0;

  while (r < nums.length) {
    const num = nums[r];
    hash[num] = ++hash[num] || 1;

    while (hash[num] > k) {
      hash[nums[l]]--;
      l++;
    }
    len = Math.max(len, r - l + 1);
    r++;
  }

  return len;
};

console.log(maxSubarrayLength([1, 2, 3, 1, 2, 3, 1, 2], 2));
console.log(maxSubarrayLength([1, 1, 1, 3], 2));
