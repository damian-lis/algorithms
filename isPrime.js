const isPrime = (number) => {
  for (let i = 2; i < number; i++) {
    // for loop => 1
    if (number % i === 0) {
      // if statement => n
      return false; // => 1
    }
  }

  return true; // => 1
};

console.log(isPrime(27277));

// Best case: number = 1 or 2 => O(1)
// Average case: O(n) => we have bigger probability to get higher numbers than 1 or 2
// Worst case: number = 27,277 => O(n)

// --------------------------------------------------------------------------------

// Improved version below:

const isPrime = (number) => {
  for (let i = 2; i < Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

console.log(isPrime(27277));

// Best case: number = 1 or 2 => O(1)
// Average case: O(sqrt(n))
// Worst case: number = 27,277 => O(sqrt(n))
