/// Selection Sort

// - put the smallest minimum element and put in the first of the array
// - create first element to store initial smallest value
// - compare this element to next element until you find the smallest
// - if smallest number found, defined smallest to j
// - if smallest !== new smallest, swap it
// - return array

/// Time Complexity O(n**2) worst case
/// Time Complexity O(n) best case

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      [arr[i], arr[lowest]] = [arr[lowest], arr[i]];
    }
  }

  return arr;
}

console.log(selectionSort([0, 11, 2, 33, 4, 6]));
