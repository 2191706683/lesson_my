// 贪心方法
// 最值
function maxProfit(prices) {
    let maxProfit = 0;
    // 先买再卖
    let minPrice = Infinity;

    for (let price of prices) {
        if (price < minPrice) {
            minPrice = price;
        } else {
            let profit = price - minPrice;
            if (profit > maxProfit) {
                maxProfit = profit;
            };
        };
        
    }; 

    return maxProfit;


}
console.log(maxProfit([7,1,5,3,6,4]))