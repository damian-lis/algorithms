const arr = [1, 5, 7, 3, -3, -5, 10, 20, 25, 70, -99];

const bubbleSort = (arr) => {
  const resultArr = [...arr];
  for (let i = 0; i < resultArr.length; i++) {
    for (let j = i + 1; j < resultArr.length; j++) {
      // Here we doing j = i + 1 becouse inner loop logically have to start from next index for comparison
      if (resultArr[i] > resultArr[j]) {
        [resultArr[i], resultArr[j]] = [resultArr[j], resultArr[i]];
      }
    }
  }

  return resultArr;
};

console.log(bubbleSort(arr));

// Best case: O(1) - nothing to do :)
// Average case: O (n^2)
// Worst case: O (n^2) => we have two nested loops
