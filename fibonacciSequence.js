// My solution:
const fibonacciSequence = (index) => {
  const numbers = []; // 1

  for (let i = 0; i < index; i++) {
    const number =
      (!numbers.length && numbers.push(1)) ||
      numbers[i] + (numbers[i - 1] ? numbers[i - 1] : 0); // n -1
    numbers.push(number); // n -1
  }

  return numbers; // 1
};;

console.log(fibonacciSequence(5)); // O(n)

// Mentor solution:
const fib = (n) => {
  const numbers = [1, 1]; // 1
  for (let i = 2; i < n + 1; i++) {
    numbers.push(numbers[i - 2] + numbers[i - 1]); // n- 1
  }

  return numbers; // 1
};

console.log(fib(5)); // O(n)

// Recursion version:

const fib2 = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  }

  return fib2(n - 1) + fib2(n - 2);
};

console.log(fib2(10));

// We have problem with nested functions as a tree
// In the case of loop-based solution whe have O(n)
// But when we look at number of calling fn we deal with O(2^n)
// Its not a good solution, going far slower than the previous ones
// Its seems to be better option in the case of low numbers but when we put for example 35 number we will have a huge number! (increase faster than n^2 or even n^3)
// Generally its no strict 2^n but we have the trend which is the closest this solution