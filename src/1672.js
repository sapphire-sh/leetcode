/**
 * @param {number[][]} accounts
 * @return {number}
 */
 var maximumWealth = function(accounts) {
    const p = accounts.map(x => x.reduce((a, b) => a + b, 0));
    return Math.max(...p);
};
