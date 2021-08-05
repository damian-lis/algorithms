const cartProduct = (setA, setB) => {
  const result = [];
  for (let setAEl of setA) {
    for (const setBEl of setB) {
      if (!Array.isArray(setAEl)) {
        setAEl = [setAEl];
      }
      result.push([...setAEl, setBEl]);
    }
  }

  return result;
};

const colors = ["blue", "red"];
const sizes = ["m", "l", "xl", "s"];
const styles = ["round neck", "v neck"];

console.log(cartProduct(colors, sizes));

// Above algorithm:
// Time complexity: O(n * m)
// Space complexity: O(n * m)

const cartesian = (...sets) => {
  let tempProduct = sets[0];
  // We are going at 1 becouse above we get the first set of our sets
  for (let i = 1; i < sets.length; i++) {
    tempProduct = cartProduct(tempProduct, sets[i]);
  }

  return tempProduct;
};

console.log(cartesian(colors, sizes, styles));

// Above algorithm:
// Time complexity: O(n^x) => this is generalization (x depends of number of sets)
// Space complexity: O(n^x) => the same situation
