var twoSum = function (numbers, target) {
  let i = 0;
  let j = numbers.length - 1;

  while (j > i) {
    const sum = numbers[i] + numbers[j];

    if (sum == target) {
      return [i + 1, j + 1];
    }

    if (sum > target) {
      j--;
    } else {
      i++;
    }
  }

  return [0, 0];
};

twoSum([2, 7, 11, 15], 9);
