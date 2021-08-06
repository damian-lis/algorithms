// Steps
// 1. Are the coins ordered and "stable"? Should we get an exact solution or round to have fewer coins
// 2. Try a greedy approach first. Go through all coins and decide for each if it should be used.

const computeChange = (coins, amount) => {
  let remainingAmount = amount;

  const calculatedChange = {
    selectedCoins: {},
    numberOfCoins: 0,
  };

  for (const coin of coins) {
    const count = Math.floor(remainingAmount / coin);
    calculatedChange[coin] = count;
    remainingAmount -= coin * count;
    calculatedChange.numberOfCoins += count;
  }

  return calculatedChange;
};

const coins = [100, 50, 20, 10, 5, 2, 1];
const targetAmount = 129;

console.log(computeChange(coins, targetAmount));

// 3. Time complexity (greedy solution): when coins length will be change by time we have O(n) else O(1) => its not depend of increase or decrease target amount
