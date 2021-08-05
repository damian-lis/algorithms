const arr = [1, 5, 7, 3, -3, -5, 10, 20, 25, 70, -99];

const quickSort = (arr) => {
  const copiedArr = [...arr];

  if (copiedArr.length <= 1) {
    return copiedArr;
  }

  const pivotElement = copiedArr.shift();
  const smallerElementsArray = [];
  const centerElementsArray = [pivotElement];
  const biggerElementsArray = [];

  //   Below when we go through all array  have linear time of complexity so it is O(n)
  while (copiedArr.length) {
    //   while copiedArr.length is truthy
    const currentElement = copiedArr.shift();
    // new element of the shifted copiedArray
    if (currentElement === pivotElement) {
      centerElementsArray.push(currentElement);
    } else if (currentElement < pivotElement) {
      smallerElementsArray.push(currentElement);
    } else {
      biggerElementsArray.push(currentElement);
    }
  }
  //  Recursive step:
  //  Below we were calling this algorithm twice. So in the relation to O(n^logb(a)) formula for a = 2. The parametr b also 2 becouse we roughly split this array to 2. So we have O(n^log2(2)) => O(n^1) => O(n)
  const smallerElementsSortedArray = quickSort(smallerElementsArray);
  const biggerElementsSortedArray = quickSort(biggerElementsArray);

  return smallerElementsSortedArray.concat(
    centerElementsArray,
    biggerElementsSortedArray
  );
};

console.log(quickSort(arr));

// Best case: items are sorted randomly O(n * log n)
// Average case:  O(n * log n) => becouse we use this algorithm only when we dont have sorted array
// Worst case: items are already sorted O(n^2) => becouse inside we have situation of nested loops (we cant split the empty array)

// Recap:
// We have the same work inside and outside of recursion so we have O(n^logb(a) * log n) formula of Master Theorem.
// In our case after conversion we have  O(n * log n) algorithm runtime

// ===> BETTER THAN BUBBLE SORT <===

// Space complexity: O(n) / O(log n) is possible => nested functions calls with the new values being created
