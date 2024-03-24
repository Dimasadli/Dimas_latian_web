/// Selection Sort

// - start by picking second element of array
// - compare it with one before and swap it if necessary
// - repeath this until array is sorted

function selectionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    let j = i - 1;

    /// Readable Code
    while (j >= 0 && arr[j] > currentVal) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = currentVal;

    /// Not Much Readable Code
    // for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
    //   arr[j + 1] = arr[j];
    // }
    // arr[j + 1] = currentVal;
  }
  return arr;
}

console.log(selectionSort([11, 2, 33, 4, 6]));
