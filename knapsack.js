const knapsackFn = (items, cap, itemIndex, mem) => {
  if (mem[cap][itemIndex]) {
    return mem[cap][itemIndex];
  }
  if (cap === 0 || itemIndex < 0) {
    return { items: [], value: 0, weight: 0 };
  }

  if (cap < items[itemIndex].weight) {
    return knapsackFn(items, cap, itemIndex - 1, mem);
  }

  const sackWithItem = knapsackFn(
    items,
    cap - items[itemIndex].weight,
    itemIndex - 1,
    mem
  );

  const sackWithoutItem = knapsackFn(items, cap, itemIndex - 1, mem);

  const valueWithItem = sackWithItem.value + items[itemIndex].value;
  const valueWithoutItem = sackWithItem.value;

  let resultSack;

  if (valueWithItem > valueWithoutItem) {
    const updatedSack = {
      items: sackWithItem.items.concat(items[itemIndex]),
      value: sackWithItem.value + items[itemIndex].value,
      weight: sackWithItem.weight + items[itemIndex].weight,
    };

    resultSack = updatedSack;
  } else {
    resultSack = sackWithoutItem;
  }

  mem[cap][itemIndex] = resultSack;

  return resultSack;
};

// Its a knapsack wrapper
const knapsack = (items, cap, index) => {
  const mem = Array.from(Array(cap + 1), () => Array(items.length)).fill(
    undefined
  );
  return knapsackFn(items, maxCap, items, mem);
};

const items = [
  { name: "a", value: 3, weight: 3 },
  { name: "b", value: 6, weight: 8 },
  { name: "c", value: 10, weight: 3 },
];

const maxCap = 8;

console.log(knapsack(items, maxCap, items.length - 1));

// In the worst case we have two recursive calls sackWithItem and sackWithoutItem => O(2^n)
// After improvement by adding dynamic solution with memo => O(n * C) / C - capacity (becouse we depend on n and C)
