const knapsack = (elements, capacity) => {
  const sack = { items: [], value: 0, weight: 0 };
  let remainingCapacity = capacity;

  // in this approach we look at that is a good option to add element to knapsack or no:
  for (const el of elements) {
    if (el.weight <= remainingCapacity) {
      sack.items.push(el);
      sack.value += el.value;
      sack.weight += el.weight;
      remainingCapacity -= el.weight;
    }
  }

  return sack;
};

const items = [
  { name: "b", value: 6, weight: 8 },
  { name: "a", value: 3, weight: 3 },
  { name: "c", value: 10, weight: 3 },
];

const maxCap = 8;

console.log(knapsack(items, maxCap));
// This algorithm isnt work correctly but at the first glance its seems to be correctly (but its working only with the input items without changing their order).
