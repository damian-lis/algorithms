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
