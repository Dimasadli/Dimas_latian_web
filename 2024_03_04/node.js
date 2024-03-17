function nestedEvenSum(obj, sums = 0) {
  // add whatever parameters you deem necessary - good luck!
  let sum = sums;

  for (const key in obj) {
    if (typeof obj[key] === "object") {
      return nestedEvenSum(obj[key], sum);
    } else if (typeof obj[key] === "number") {
      sum += obj[key];
    }
  }
  return sum;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

nestedEvenSum(obj1); // 6
nestedEvenSum(obj2); // 10

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (arr[middle] === target) {
      return middle;
    } else if (arr[middle] > target) {
      right = middle - 1;
    } else if (arr[middle] < target) {
      left = middle + 1;
    }
  }

  return -1;
}

function naiveSearch(long, short) {
  // outer loop
  let result = 0;
  for (let i = 0; i < long.length; i++) {
    // inner loop
    for (let j = 0; j < short.length; j++) {
      if (long[i + j] !== short[j]) break;
      if (j === short.length - 1) result++;
    }
  }
  return result;
}

console.log(naiveSearch("lorie loled", "ri"));

console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 30));
