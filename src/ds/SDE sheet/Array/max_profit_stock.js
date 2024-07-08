var maxProfit = function (prices) {
  let min = prices[0];
  let max = 0;
  let len = prices.length - 1;
  for (let i = 1; i <= len; i++) {
    let diff = prices[i] - min;
    max = max < diff ? diff : max;
    min = min > prices[i] ? prices[i] : min;
  }
  return max;
};
