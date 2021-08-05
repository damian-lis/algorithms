// Without repetitions:

const getPermutations = (options) => {
  const permutations = [];

  if (options.length === 1) return [options];
  //   Here we returned [[n]] becouse getPermutations fn always return an [[]] as permutations

  const partialPermutations = getPermutations(options.slice(1));

  const firstOption = options[0];

  for (let i = 0; i < partialPermutations.length; i++) {
    const partialPermutation = partialPermutations[i];

    for (let j = 0; j <= partialPermutation.length; j++) {
      const permutationInFront = partialPermutation.slice(0, j);
      const permutationAfter = partialPermutation.slice(j);
      permutations.push(
        permutationInFront.concat([firstOption], permutationAfter)
      );
    }
  }

  return permutations;
};

const arr = [1, 2, 3, 4];

console.log(getPermutations(arr));

// Above algorithm:
// Time complexity: O(!n) => factorial complexity (for example 5 * 4 * 3 * 2 * 1 = 120)
// Its horrible! :D

// ------------------------------------------------------------------------------------

// With repetitions:
const getPermutations2 = (options, length) => {
  const permutations = [];

  if (length === 1) {
    return options.map((option) => [option]);
    // Always must return array
  }

  const partialPermutation = getPermutations2(options, length - 1);

  for (const option of options) {
    for (const existingPermutation of partialPermutation) {
      permutations.push([option].concat(existingPermutation));
    }
  }

  return permutations;
};

const digits = [1, 2, 3];
const resultLength = 3;
// Here we pass length because we need to determine the scope of the return digits

console.log(getPermutations2(digits, resultLength));

// Time complexity: O(n^r) => n is the number options, r is the length
// When we have [1,2] digits and resultLength = 2 => n = 4
// When we have [1,2] digits and resultLength = 3 => n = 8
// So we can easly see the trend of n^r