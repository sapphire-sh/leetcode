/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    function calc(index, stocks) {
        if(index >= prices.length) {
            return 0;
        }
        const price = prices[index];
        if(stocks !== -1) {
            const a = price - stocks;
            const b = calc(index + 1, stocks);
            if(a > 0) {
                return Math.max(a, b);
            }
            return b;
        }
        else {
            const a = calc(index + 1, -1);
            const b = calc(index + 1, price);
            return Math.max(a, b);
        }
    }
    return calc(0, -1);
};
