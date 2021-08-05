const linearSearch = (arr, element, objsComparatorFn) => {
  let index = 0;
  for (const item of arr) {
    if (
      typeof element === "object" &&
      element !== null &&
      objsComparatorFn(element, item)
    ) {
      return index;
    }
    if (item === element) {
      return index;
    }
    index++;
  }
};

const numsArray = [33, 1, 2, 3, 4, 9, -1, 3];
const objsArray = [
  { name: "Małgosia", age: 30 },
  { name: "Jacek", age: 25 },
  { name: "Damian", age: 28 },
];

const objsComparatorFn = (element, item) => element.name === item.name;

console.log(
  linearSearch(objsArray, { name: "Damian", age: 28 }, objsComparatorFn)
);

// Best case: when the first element of array is that what we search for => O(1)
// Average case: O(n)
// Worst case: O(n)

// Space complexity of above algorithm: O(1) 
// It doesn't occupied more space by increase n
