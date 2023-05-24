// 动态规划来做
function maxProfit(prices) {
    const n = prices.length;
    let hold = new Array(n).fill(-Infinity);
    let unhold = new Array(n).fill(0);
    hold[0] = -prices[0];
    for (let i = 1; i < n; i++) {
        hold[i] = Math.max(hold[i - 1], -prices[i]);
        unhold[i] = Math.max(unhold[i - 1], hold[i - 1] + prices[i]);
    }

    return unhold[n - 1];
}

console.log(maxProfit([7,1,5,3,6,4]))
