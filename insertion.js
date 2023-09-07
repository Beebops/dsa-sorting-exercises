function insertionSort(arr) {
  // start at second element in array since first element is already sorted
  for (let i = 1; i < arr.length; i++) {
    let currentElement = arr[i]
    // Initialize a pointer to the last element in the sorted portion (initially one position before the current element)
    let pointer = i - 1

    // Move elements of the sorted portion that are greater than the current element to the right
    while (pointer >= 0 && arr[pointer] > currentElement) {
      // Shift the greater element to the right.
      arr[pointer + 1] = arr[pointer]
      pointer--
    }
    // Insert the current element into its correct position in the sorted portion.
    arr[pointer + 1] = currentElement
  }
  return arr
}

module.exports = insertionSort
