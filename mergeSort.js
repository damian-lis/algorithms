const mergeSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  if (arr.length === 2) {
    return arr[0] > arr[1] ? [arr[1], arr[0]] : arr;
  }

  const middle = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, middle);
  const rightArr = arr.slice(middle);

  const leftSortedArr = mergeSort(leftArr);
  const rightSortedArr = mergeSort(rightArr);

  const mergedArr = [];
  let leftArrIndex = 0;
  let rightArrIndex = 0;

  while (
    leftArrIndex < leftSortedArr.length ||
    rightArrIndex < rightSortedArr.length
  ) {
    if (
      leftArrIndex >= leftSortedArr.length ||
      leftSortedArr[leftArrIndex] > rightSortedArr[rightArrIndex]
    ) {
      mergedArr.push(rightSortedArr[rightArrIndex]);
      rightArrIndex++;
    } else {
      mergedArr.push(leftSortedArr[leftArrIndex]);
      leftArrIndex++;
    }
  }
  return mergedArr;
};

const arr = [1, 4, 7, 6, 5, 2];

console.log(mergeSort(arr));

// This algorithm always performs exactly with the same time complexity O(n * log n)

// Analisys:
// Recursive step time complexity: O(n^logb(a)) => O(n^log2(2)) => O(n^1) => O(n)
// Time complexity outside of the recursion: O(n) => we have while loop wchich works linear. It not has nested loop inside
// Algorithm time complexity: O(n^logb(a) * log n) => O(n * log n)

// ===> HAVE BETTER PERFORMANCE RELATIVE TO QUICK SORT AND BUBBLE SORT ALGOS <===
