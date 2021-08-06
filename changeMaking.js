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

// ----------- Brute force approach -----------

const computeChangeBruteForce = (coins, amount) =>{
    const results = []

    for (let i = 0; i < coins.length; i++) {
      results.push(computeChange(coins.slice(i), amount))   
    }

    let smallestAmountOfCoins = Number.MAX_SAFE_INTEGER
    let finalResult

    for (const result of results) {
        if(result.numberOfCoins < smallestAmountOfCoins){
            smallestAmountOfCoins = result.numberOfCoins
            finalResult = result
        }
    }

    return finalResult
}

const coins2 = [8, 6, 5, 1];
const targetAmount2 = 11;

console.log(computeChangeBruteForce(coins2, targetAmount2));

// Time complexity (brute force solution): O(n^2) => we have loop in loop(but we shrink by every loop the amount of coins in the case of calling computeChange fn)
