// - 零钱兑换问题
function coinChange(coins, amount) {
    // 创建一个数组来保存最少硬币数量
    const dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0; // 金额为0时，需要0个硬币

    for (let i = 1; i <= amount; i++) {
        for (let j = 0; j < coins.length; j++) {
            if (coins[j] <= i) {
                // 使用第 j 个硬币
                dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
            }
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount];
}

// 示例用法
const coins = [1, 2, 5];
const amount = 11;
console.log(coinChange(coins, amount)); // 输出：3
