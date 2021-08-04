const isPowerOfTwo = () => {
  if (number < 1) return false;

  let dividedNumber = number;

  while (dividedNumber !== 1) {
    if (dividedNumber % 2 !== 0) return false;
    dividedNumber = dividedNumber / 2; // here we split each iteration so we have O(log n)
  }

  return true;
};

// Best case: number = 13 => O(1)
// Average case: O(log n)
// Worst case: number = 1,000,000 => O(log n)

// A faster increase in the number of data does not lead to a rapid increase in time complexity

// Explain binary notation:
// 2 => 10
// 4 => 100
// 8 => 1000

// 0100
// 1000
// 0000 => the result of comparison two binary numbers (4 & 8 = 0 becouse 0000 give us 0 in decimal numbers)

// 0100
// 0111
// 0100 => the result of comparison two binary numbers(4 & 7 = 0 becouse 0100 give us 4 in decimal numbers)
// Below is improved version of is power of two algorithm:

// The rule of binary comparison (when we comparison 2,4,8,16... we always get 0)

const isPowerOfTwo = () => {
  if (number < 1) return false;

  return number & (number - 1 === 0); // O(1)
};
