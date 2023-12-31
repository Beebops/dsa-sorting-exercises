function selectionSort(arr) {
  const n = arr.length

  for (let i = 0; i < n - 1; i++) {
    // Assume the current element is the minimum
    let minIndex = i

    // Find the index of the minimum element in the unsorted portion of the array
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }

    // Swap the minimum element with the current element
    if (minIndex !== i) {
      ;[arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
  }
  return arr
}

module.exports = selectionSort

selectionSort([4, 2, 6, 1])
