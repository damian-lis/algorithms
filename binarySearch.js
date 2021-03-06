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

// Space complexity of above algorithm: O(1)
// It doesn't occupied more space by increase n


// Recursive Binary Search:

const recursiveBinarySearch = (arr, element, offset) => {
  // Everything in this body function we have constant time complexity O(1)
    let startIndex = 0;
    let endIndex = arr.length - 1;
  
    const middleIndex = Math.floor((endIndex - startIndex) / 2);
  
    if (arr[middleIndex] === element) {
        return middleIndex + offset;
    }
  
    if (arr[middleIndex] > element) {
        endIndex = middleIndex;
    } else {
        startIndex = middleIndex + 1;
        offset = offset + middleIndex + 1
    }
  // O(1)
    return recursiveBinarySearch(arr.slice(startIndex, endIndex + 1), element, offset) 
  };
  
  const arr2 = [1, 3, 5, 6, 7, 8, 99];
  
  console.log(recursiveBinarySearch(arr2, 3, 0));

//  Offset as info for array subset for remember the previous index of the array (this is only the case when we have the second half of array - here we lost correct index number)

// We have a formula for this kind of recursion fn:
// O(n^logb a)
// In this case we have a = 1 b = 2
// In the result O(n^log2 1) => O(n^0) => O(1) - only for the first step of recursion
// Overall algorithm time complexity is O(n^2logb a * log n) => O(1 * log n ) => O(log n)

// Space complexity of above algorithm: O(n) 
// Each recursion fn is waiting for the result of nested recursion fn (every fn must store ourself variables)
