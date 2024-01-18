var topKFrequent = function (nums, k) {
  let hash = {};

  if (nums.length <= k) {
    return nums;
  }

  for (let num of nums) {
    if (hash[num]) {
      hash[num]++;
    } else {
      hash[num] = 1;
    }
  }

  let result = Object.keys(hash).map((key) => [Number(key), hash[key]]);
  let sortedResult = result.sort((a, b) => {
    return b[1] - a[1];
  });

  let output = [];
  for (let i = 0; i < k; i++) {
    output.push(sortedResult[i][0]);
  }
  return output;
};

topKFrequent([1, 1, 1, 2, 2, 3], 2);
