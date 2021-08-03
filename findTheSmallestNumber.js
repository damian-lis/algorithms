const getMin = () => {
  let currentMin = numbers[0]; // => 1

  for (const num of numbers) {
    // for => 1
    if (num < currentMin) {
      // if => n
      currentMin = num; // => 0 (best case) / 2 (worst case) / 1 (average case)
    }
  }

  return currentMin; // => 1
};

// Best case: [1,2,3] => O(n)
// Average case: [2,1,3] => O(n)
// Worst case: [3,2,1] => O(n)
