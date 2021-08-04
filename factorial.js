const fact = (number) => {
  let result = number;
  for (let i = 1; i < number; i++) {
    result = result * (number - i);
  }
  return result;
};

console.log(fact(4));

// O(n)

const fact2 = (number) => {
  let result = 1;
  for (let i = 2; i <= number; i++) {
    result = result * i;
  }
  return result;
};

console.log(fact2(5));

// O(n)

const fact3 = (number) => {
  if (number === 1) {
    return 1;
  }

  return number * fact3(number - 1);
};

// In every function call we have O(1)
// But we trigger multiple function calls => n function calls
// T = n * O(n) => O(n)
// This has the same time complexity as examples before but it includes less code
