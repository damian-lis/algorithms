// General info

// Time complexity measure:

// 1. Example of O(n)

const data = ["a", "b", "c"];

for (let i = 0; i < data.length; i++) {
  console.log(data[i]);
}

// If we increase data the time of running this fn is growing proportionally
// Linear scalling

// --------------------

// 2. Example of O(n + a)

const data = ["a", "b", "c"];
const data2 = [1, 2, 3, 4, 5];

for (let j = 0; j < data.length; j++) {
  console.log(data2[i]);
}

for (let i = 0; i < data.length; i++) {
  console.log(data[i]);
}

// We have two cases of linear growth

// --------------------

// 3. Example of O(n * a)

const data = ["a", "b", "c"];
const data2 = [1, 2, 3, 4, 5];

for (let j = 0; j < data.length; j++) {
  for (let i = 0; i < data.length; i++) {
    console.log(data[i] + data2[j]);
  }
}

// --------------------

// 3. Example of O(n^2)

const data = ["a", "b", "c"];

for (let j = 0; j < data.length; j++) {
  for (let i = 0; i < data.length; i++) {
    console.log(data[i] + data[j]);
  }
}

// We have expotentially time performing growth when data grows

// --------------------

// 4. Example of O(4n^2)

const data = ["a", "b", "c"];

for (let j = 0; j < data.length; j++) {
  for (let i = 0; i < data.length; i++) {
    console.log(data[i] + data[j]);
    console.log(data[i] + data[j]);
    console.log(data[i] + data[j]);
    console.log(data[i] + data[j]);
  }
}

// This is meaningless becouse we dont care about what is in the fn body but how many times whole process will take in relation to data
// So we use only O(n^2) notation to show how our algorithm grows over time

// --------------------

// 5. Example of O(n^2 + n)

const data = ["a", "b", "c"];

for (let j = 0; j < data.length; j++) {
  for (let i = 0; i < data.length; i++) {
    console.log(data[i] + data[j]);
  }
}

for (let i = 0; i < data.length; i++) {
  console.log(data[i] + data[j]);
}

// We cut everything what is scalling less. In this case the part of "+n" becouse its linear growth in relation to n^2

// --------------------
// --------------------
// --------------------

// Space complexity measure:

// 1. O(1)

const data = ["a", "b", "c"];

for (let i = 0; i < data.length; i++) {
  console.log(data[i]);
}

// Space complexity is equal to 0 becouse we dont arrange memory for this operation
// O(1) means that space doesnt change during performance

// --------------------

//2. O(n)

const data = ["a", "b", "c"];
const out = [];

for (let i = 0; j < data.length; i++) {
  for (let j = 0; j < data.length; j++) {
    out[j] = data[j];
  }
}

// The output will be with the same length as our input data

// --------------------

//3. O(n^2)

const data = ["a", "b", "c"];
const out = [];

for (let i = 0; j < data.length; i++) {
  out[i] = [];
  for (let j = 0; j < data.length; j++) {
    out[i][j] = data[i];
  }
}

// The space complexity will be growth expotentially in realtion to input data

// --------------------
// --------------------
// --------------------

// RECAP
// In most cases look up for the time complexity than space complexity
