var maxOperations = function (nums, k) {
  const sorted = nums.sort((a, b) => a - b);

  let left = 0;
  let right = sorted.length - 1;

  let counter = 0;
  while (right > left) {
    const sum = sorted[left] + sorted[right];

    if (sum == k) {
      counter++;
      right--;
      left++;
    } else {
      if (sum > k) {
        right--;
      } else {
        left++;
      }
    }
  }

  return counter;
};

maxOperations([1, 2, 3, 4], 5);
