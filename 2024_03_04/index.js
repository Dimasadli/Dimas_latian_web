function canPartition(arr) {
  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  if (sum % 2 !== 0) return false; // If the total sum is odd, it cannot be partitioned into two equal subsets

  const target = sum / 2;
  const dp = new Array(target + 1).fill(false);
  dp[0] = true; // Base case: an empty subset can always reach a sum of 0

  for (const num of arr) {
    for (let i = target; i >= num; i--) {
      dp[i] = dp[i] || dp[i - num]; // Update dp[i] if adding num can reach the sum
    }
  }
  console.log(dp);
  return dp[target]; // If dp[target] is true, it means we can partition the array into two equal subsets
}

// Example usage:

function canPartition(arr) {
  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  if (sum % 2 !== 0) return false; // If the total sum is odd, it cannot be partitioned into two equal subsets

  const target = sum / 2;
  let left = 0;
  let currentSum = 0;

  for (let right = 0; right < arr.length; right++) {
    currentSum += arr[right];

    while (currentSum > target) {
      currentSum -= arr[left];
      left++;
    }
    if (currentSum === target) return true;
  }

  return false;
}

const arr = [2, 3, 3, 3, 4, 5];
console.log(canPartition(arr));

const randomizeArray = (arr) => {
  let temp = [...arr];
  for (let i = 0; i < temp.length; i++) {
    const j = Math.floor(Math.random() * temp.length);

    [temp[i], temp[j]] = [temp[j], temp[i]];
  }
  return temp;
};

const array = [
  {
    id: 1,
    name: "Dimas",
    title: "Ngasal",
  },
  {
    id: 2,
    name: "Bisa",
    title: "lalala",
  },
  {
    id: 3,
    name: "Xzy",
    title: "Hebat",
  },
];

const played = array[1];

const find = array.indexOf(played);
console.log(find);
