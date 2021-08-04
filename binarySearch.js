// Is better than linear search algo
// Linear search is working with ordered and unordered list
// Binary search is working only with the ordered list
// In this case we splitour array every time and get result

const binarySearch = (arr, element) => {
  let startIndex = 0;
  let endIndex = arr.length - 1;

  while (startIndex <= endIndex) {
    const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);
    if (arr[middleIndex] === element) {
      return middleIndex;
    }

    if (arr[middleIndex] > element) {
      endIndex = middleIndex - 1;
    } else {
      startIndex = middleIndex + 1;
    }
  }
};

const arr = [1, 3, 5, 6, 7, 8, 99];

console.log(binarySearch(arr, 6));

// Best case: searching number exist in the middle of array => O(1)
// Average case: O(log n)
// Worst case: O(log n)

// On every iteration we have split our passed data. so we have logaritmic time complexity
