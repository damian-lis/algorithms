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
