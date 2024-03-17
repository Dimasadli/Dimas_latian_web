/// Bubble Sort
/// bubbling highest / lowest element to the end of the array

// loop from i === n length to 0
// inner loop from j to i - 1
// compare j and j+1
// swap if j+1 < j
// return array

/// time Complexity O(n^2) worst case
/// time Complexity O(n) best case

function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}

// optimized Version
function bubbleSortSecond(arr) {
  let noSwaps;

  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwaps = true;
      }
    }
    if (noSwaps) break;
  }

  return arr;
}

console.log(bubbleSort([11, 2, 33, 4, 6]));
console.log(bubbleSortSecond([11, 2, 3, 4, 6]));
