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

var groupThePeople = function (groupSizes) {
  const groups = {};
  const result = [];

  for (let i = 0; i < groupSizes.length; i++) {
    const size = groupSizes[i];
    if (!groups[size]) {
      groups[size] = [];
    }
    groups[size].push(i);

    if (groups[size].length === size) {
      result.push(groups[size]);
      groups[size] = [];
    }
  }

  return result;
};

console.log(groupThePeople([2, 1, 3, 3, 3, 2]));
console.log(groupThePeople([3, 3, 3, 3, 3, 1, 3]));

var numberGame = function (nums) {
  nums = nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i += 2) {
    [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
  }

  return nums;
};

console.log(numberGame([5, 4, 2, 3]));
console.log(numberGame([2, 5]));
